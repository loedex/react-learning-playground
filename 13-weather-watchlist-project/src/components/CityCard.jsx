import React, { useEffect, useState } from 'react'

const CityCard = ({city, onRemove}) => {
    const [weather, setWeather] = useState(null)
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);


    //Effect-1. fetch weather whenever this card mounts,
    //and re-fetch if the city prop itself ever changes.
    useEffect(()=>{
        const fetchWeather = async ()=>{
            try{
                setIsLoading(true);
                setError(null); //clear old error before a fresh attempt
                const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
                const res = await fetch(url);
                if(!res.ok) throw new Error ('Failed to fetch weather');
                const result = await res.json();
                setWeather(result.current_weather);
                
            }catch(err){
                setError(err.message);
            }finally{
                setIsLoading(false);
            }
        };
        fetchWeather();
    },[city]);



    //Effect-2
    //Auto refresh this city's weather every 30 seconds.
    //Runs once per mount, sets up its own independent timer.
    useEffect(() => {
    const timerId = setInterval(() => {
      const fetchWeather = async () => {
        try {
          const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
          const res = await fetch(url);
          if (!res.ok) throw new Error('Failed to fetch weather');
          const result = await res.json();
          setWeather(result.current_weather);
          console.log("Re-fetched");
          
        } catch (err) {
          setError(err.message);
        }
      };
      fetchWeather();
    }, 3000); // 30 seconds
 
    // Cleanup: stop this specific card's timer when it unmounts
    // (e.g. when the user clicks "Remove" and this card disappears)
    return () => clearInterval(timerId);
  }, [city]);
  return (
    <div style={{
        backgroundColor: 'whitesmoke',
        padding: '20px',
        borderRadius: '8px',
        minWidth: '220px',
      }}>
           <h3>{city.name}</h3>
 
      {isLoading && <p>Fetching weather...</p>}
 
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
 
      {!isLoading && !error && weather && (
        <div>
          <p>🌡️ Temperature: {weather.temperature}°C</p>
          <p>💨 Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}
       <button onClick={() => onRemove(city.name)}>Remove</button>
    </div>
  )
}

export default CityCard