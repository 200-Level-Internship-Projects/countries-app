import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCaretDown  } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

const Filter = () => {
    // const [selectedFilter, setSelectedFilter] = useState('all');

    // const handleFilterChange = (event) => {
    //   setSelectedFilter(event.target.value);
    // };
  return (
    <div className='filter'>
        <div className="filter-header">
            <p className='filter-text'>Filter by region</p>
            <div className="filter-icon">
            <FontAwesomeIcon icon={faCaretDown} />
            </div>
        </div>
    </div>
  )
}

export default Filter


    //   {/* <p className='filter-text'>Filter by region</p> */}
    //   <select id="filter" value={selectedFilter} onChange={handleFilterChange} className='filter-elements'>
    //     <option value="all">Filter by region</option>
    //     <option value="option1">Option 1</option>
    //     <option value="option2">Option 2</option>
    //     {/* Add more options as needed */}
    //   </select>
    //   {/* Render your filtered results based on selectedFilter */}