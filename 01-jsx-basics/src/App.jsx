import React from 'react'
import Card from './components/Card'

const App = () => {
  const users = [
    {id:1, name:"Husnain Ahmad",email:"husnain@gmail.com",age:20,country:"Germany"},
    {id:2, name:"M. Ahmad",email:"M@gmail.com",age:21,country:"iRAN"},
    {id:3, name:"Umar Farooq",email:"umr@gmail.com",age:25,country:"Pak"},
    {id:4, name:"Mubeen",email:"mubeen@gmail.com",age:22,country:"Pakistan"},
    {id:5, name:"Humaira Tabasum",email:"humaira@gmail.com",age:23,country:"India"},
    {id:6, name:"Rizwan",email:"riz@gmail.com",age:24,country:"PAKISTAN"},
    {id:7, name:"HUsnain ALi",email:"ali@gmail.com",age:27,country:"Iran"},
    {id:8, name:"Shahzaib",email:"sz@gmail.com",age:19,country:"Pakistan"},
    {id:9, name:"Unknown",email:"unk@gmail.com",age:20,country:"India"},
  ]
  return (
    <div>
      {
        users.map((user)=>(
          <Card key={user.id} {...user} />
        ))
      }
      <Card />
    </div>
  );
}

export default App