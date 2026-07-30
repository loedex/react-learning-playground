import React from 'react'

const Card = ({name="Default Name",age="Default Age",email="Default Email",country="Default Country"}) => {
  return (
    <div>
        <h2>Name : {name}</h2>
        <p>Age : {age}</p>
        <p>Email : {email}</p>
        <p>Country : {country}</p>
    </div>
  )
}

export default Card