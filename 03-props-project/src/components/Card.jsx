import React from 'react'

const Card = ({companyLogo, companyName, timeSincePosted, tag3, tag2, tag1, jobShortDescription, jobHeading, ratePerHour}) => {
  // console.log(props.tag1);
  
  return (
    <>
      <div className="parent">
        <div className="top">
          <img src={companyLogo} alt="My Picture" />
          <div className='top-title'>
            <h5>{companyName}</h5>
            <p>posted 3hrs ago</p>
            
          </div>
          
        </div>
        <div className="middle">
          <div className='tags'>
            <p>{tag1}</p>
            <p>{tag2}</p>
            <p>{tag3}</p>
          </div>
         <div>
           <div className='middle-heading'>
            <p>{jobHeading}</p>
          </div>
          <div className='middle-text'>
            <p>{jobShortDescription}</p>
          </div>
         </div>
        </div>
        <div className='bottom'>
          <div className='payment'>
            <h5>{ratePerHour}<p>/hr</p></h5>
            <p className='hourly-tag'>Hourly</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
}

export default Card