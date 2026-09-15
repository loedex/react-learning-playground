import React from "react";
import { useState, useEffect } from "react";

const GpeWatchlist = ({ username , onRemove}) => {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState();
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`,
        );
        if (!userResponse.ok) throw new Error("Error");
        const UserData = await userResponse.json();
        setUserData(UserData);

        const repoResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=stars&per_page=5&direction=desc`,
        );
        if(!repoResponse.ok) throw new Error("Error occurred");
        const RepoData = await repoResponse.json();
        setRepoData(RepoData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [username]);

  useEffect(() => {
    console.log("Updated User Data");
    console.log(userData);
    console.log("Repo Data");
    console.log(repoData);
  }, [userData, repoData]);

  return (
    <>
      <div className="bg-blue-300 px-4 py-5 rounded-lg ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="avater w-15 h-15 rounded-full overflow-hidden ">
              <img  src={userData?.avatar_url || "/uaf.gif"} alt="avater" />
            </div>
            <p className="leading-4">
              <span className="font-bold">{userData?.login}</span> <br />
              <span className="text-sm">
                {userData?.name || userData?.login}
              </span>
            </p>
          </div>
          <div onClick={()=> onRemove(username)} className="bg-black rounded-lg px-2 py-1 cursor-pointer">
            <i className="ri-delete-bin-2-fill text-2xl text-white   "></i>
          </div>
        </div>

        <div className="flex gap-10 mt-5 mb-5">
          <p className="leading-4">
            <span className="font-bold">{userData?.followers}</span> <br />{" "}
            <span className="text-md">Followers</span>
          </p>
          <p className="leading-4">
            <span className="font-bold">{userData?.public_repos}</span> <br />
            <span className="text-md">repos</span>
          </p>
        </div>

        <hr />

        <div className="flex flex-col mt-5">
          <h6 className="text-sm text-gray-600">Top Repositories</h6>
          {repoData.map((repo) => (
            <div key={repo.id} className="flex justify-between items-center">
              <h6 className="text-lg underline">{repo?.name}</h6>
              <span>
                <i className="ri-star-line"></i> {repo?.stargazers_count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GpeWatchlist;
