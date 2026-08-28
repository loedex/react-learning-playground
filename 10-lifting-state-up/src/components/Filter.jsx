import React from 'react'

const Filter = ({onSearch}) => {
  return (
    <div>
        <input type="text" placeholder='search task ...' onChange={(e)=> onSearch(e.target.value)} />
    </div>
  )
}

export default Filter