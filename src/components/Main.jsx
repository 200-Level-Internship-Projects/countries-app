// import React from 'react'
import '../App.css';
import Search from './Search';
import Filter from './Filter';
import Countries from './Countries';

const Main = () => {
  return (
    <div className="Main">
        <div className="search-filter">
            <Search />
            <Filter />
        </div>
        <Countries />
    </div>
  )
}

export default Main;