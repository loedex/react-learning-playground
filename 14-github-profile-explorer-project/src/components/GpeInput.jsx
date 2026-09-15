import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";

const GpeInput = ({ searchText, setSearchText, setWatchList, watchlist }) => {
  const [error, setError] = useState(null);
  console.log("Current Search Text : ", searchText);

  const handleSubmission = async (e) => {
    e.preventDefault();
    console.log(`Value after Submission : ${searchText}`);

    const username = searchText.trim().toLowerCase().replace(/\s/g, "");
    console.log(`Username now : ${username}`);

    if (!username) {
      setError(`Kindly type a vlid username. e.g, "loedex"`);
      return;
    }

    // const isDuplicate = watchlist.some(i => i===username);
    const isDuplicate = watchlist.includes(username);
    if (isDuplicate) {
      setError("Duplicate. Kindly use some other username");
      return;
    }

    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        if(!response.ok) throw new Error("username not found");
        
    }catch(err){
        setError(err.message);
        return;
    }
    

    setWatchList((prev) => [...prev, username]);
    console.log(`Watchlist after setting the new value : ${watchlist}`);

    setError("");
    setSearchText("");
  };
  return (
    <div className="w-full mt-5 p-7">
      <form onSubmit={handleSubmission} className="w-full flex gap-2 ">
        <input
          className="grow border border-gray-300 px-5 py-2 rounded-lg "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Enter github username ..."
        />
        <button className="bg-black text-white px-2 rounded-lg cursor-pointer" type="submit">
          {" "}
          <i className="ri-add-line"></i> Add to Watchlist
        </button>
      </form>

      {error && (
        <p style={{ color: "red", fontSize: "14px" }}>
          Error Occurred : {error}
        </p>
      )}
    </div>
  );
};

export default GpeInput;
