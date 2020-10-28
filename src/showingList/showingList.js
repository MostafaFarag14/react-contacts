import React from 'react'
import './showingList.css'
const ShowingList = ({filteredCount, totalCount, showAll}) => {
 return (
  <div className='ShowingList-container'>
   <span className='ShowingList-data'>
    {`Now showing ${filteredCount} of ${totalCount} total`}
   </span>
   <button onClick={showAll} className='showAll-button'>
   Show all
   </button>
  </div>
 )
}

export default ShowingList;