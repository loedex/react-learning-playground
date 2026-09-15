import React from "react";
import GpeInput from "./GpeInput";
import { useState, useEffect} from "react";
import GpeWatchlist from "./GpeWatchlist";

const GpeParent = () => {
  const [searchText, setSearchText] = useState("");
  const [watchlist, setWatchList] = useState([
  ]);


  function handleRemove(name) {
    setWatchList((prev)=> (
        prev.filter(i=> i!==name)
    ))
    
  }

  useEffect(()=>{
    const saved = localStorage.getItem('githubwatchlistt');
    if(saved){
        setWatchList(JSON.parse(saved));
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('githubwatchlistt', JSON.stringify(watchlist));
  },[watchlist]);
  return (
    <div>
      <GpeInput
        searchText={searchText}
        setSearchText={setSearchText}
        watchlist={watchlist}
        setWatchList={setWatchList}
      />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4 mb-4">
        {
            watchlist.map((i)=> (
                <GpeWatchlist  key={i} username={i} onRemove={handleRemove}/>
            ))
        }
    </div>
    </div>
  );
};

export default GpeParent;
