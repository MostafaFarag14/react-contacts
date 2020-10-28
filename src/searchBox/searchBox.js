import React from 'react'
import './searchBox.css'
import { Link } from 'react-router-dom'
const SearchBox = ({ query, updateQuery }) => {

  return (
    <div className='header'>
      <div className='search-icon' />
      <input
        className='search-input'
        type='search' placeholder='Search Contacts'
        value={query}
        onChange={updateQuery}
      />
      <Link to='/create' className='add-contact' />
    </div>
  )

}

export default SearchBox;