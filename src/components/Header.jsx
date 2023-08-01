// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import '../App.css';




const Header = () => {
  return (
    <div className='Header'>
        <p className='Header-text'>Where in the world?</p>
        <div className="toggle">
            <div className="toggle-img">
            <FontAwesomeIcon icon={faMoon} className='toggle-icon'/>
            </div>
            <div className="toggle-text">Dark Mode</div>
        </div>
    </div>
  )
}

export default Header