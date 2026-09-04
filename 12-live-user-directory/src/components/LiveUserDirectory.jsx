import React, { useEffect } from 'react'
import { useState , } from 'react'

const LiveUserDirectory = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshCount, setRefreshCount] = useState(0);

    //Effect-1
    //Fetch data whenever the refreshCount changes
    useEffect(()=> {
        const fetchData = async ()=> {
            try{
                setIsLoading(true);
                setError(null); //clear the old error and fetch again
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok) throw new Error("Failed to obtain user's data");
                const data = await response.json();
                setData(data);
                
            }catch(err){
                setError(err.message);
            }finally{
                setIsLoading(false);
            }
        }
        fetchData();
    }, [refreshCount]);
    

    //Second useEffect to update refreshCount every 10 seconds
    useEffect(()=>{
        const timerId = setInterval(()=>{
            setRefreshCount(prev => prev+1);
        },10000);

        //Stop timer on unmount
        return ()=> clearInterval(timerId);
    },[]); //Setup the timer once on mount only


    //Effect-3 
    //keep the browser tab's title in sync with current state
    useEffect(()=>{
        if(isLoading){
            document.title = 'loading users ...';
        }else if(error){
            document.title = 'Error loading users';
        }else{
            document.title=`${data.length} users loaded`;
        }
    }, [error, data, isLoading]);
    if(isLoading && data.length===0){
        return <p style={{background: 'green', color: 'white', fontWeight:'bold'}}>loading users data .... please wait, it should take a minute</p>
    }
    if(error){
        return <p style={{background: 'red', color: 'white', fontWeight: 'bold'}}>Error occurred : {error}</p>
    }
//for debugging.
// console.log(data);

  return (
    <div style={{width: '100%', minHeight: '100vh', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', }}>
        <h1>Live User Directory </h1>
        <h5>Auto refreshes after 10 seconds</h5>
     <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', width: '100%'}}>
           {
            data.map((user)=> (
               
                 <div key={user.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', backgroundColor: 'whitesmoke', padding: '40px',  }}>
                    <h3>Name : {user.name}</h3>
                    <h4>Username : {user.username}</h4>
                    <h5>City : {user.address?.city}</h5>
                    <h6>Company : {user.company?.name}</h6>
                    <h6>Email : {user.email}</h6>
                    <h6>Phone Number : {user.phone}</h6>
                    <h6>Visit my website : {user.website}</h6>
                </div>
               
            ))
        }
     </div>
    </div>
  )
}

export default LiveUserDirectory