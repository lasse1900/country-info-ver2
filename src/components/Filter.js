import React from 'react'

const Filter = ({ filter, handleFilter }) => {
  // console.log('fillter', filter)
  return (
      <div>
        search: <input 
        className="btn"
        placeholder="Give country name:"
        value={filter} 
        onChange={handleFilter} />
      </div>
  )
}

export default Filter
