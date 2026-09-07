import React from 'react'
import { useState } from 'react'
import { CITY_COORDINATES } from './components/CityData'
import CityCard from './components/CityCard';

const App = () => {
  const [watchlist, setWatchList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [formError, setFormError] = useState("");


  function handleAddCity(e) {
    e.preventDefault();

    const key = searchText.trim().toLowerCase().replace(/\s/g, '');

    if(!key){
      setFormError('please type a city name');
      return;
    }

    const match = CITY_COORDINATES[key];
    if(!match){
      setFormError(`${searchText}  is not in our demo list.` );
      return;
    }
    setWatchList((prev)=> [...prev, match]);
    setSearchText('');
    setFormError('');
  }

  function handleRemove(cityName) {
    setWatchList((prev)=> prev.filter((c)=> c.name !== cityName))
    
  }
  return (
    <div>
      <h1>Weather WatchList</h1>
      <p>Auto refreshes every city's weather every 30 seconds</p>

      <form onSubmit={handleAddCity}>
        <input value={searchText} onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder='Search city name ...' />
        <button type='submit'>Add to watchlist</button>
      </form>

      {
        formError && <p style={{color: 'red'}}>{formError}</p>
      }


      {
        watchlist.length === 0 ? (
          <p>No cities added yet - search above to get started.</p>
        ) : (
          <div>
            {watchlist.map((city) => (
              <CityCard key={city.name} city={city} onRemove={handleRemove}/>
            ))}
          </div>
        )
      }
    </div>
  )
}

export default App