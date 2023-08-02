
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Header = () => {

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`Header ${darkMode ? 'dark-theme' : 'light-theme'}`}>
        <p className='Header-text'>Where in the world?</p>
        <div className="toggle" onClick={handleThemeChange} id='toggle'>
            <div className="toggle-img">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className='toggle-icon'/>
            </div>
            <div className="toggle-text" id='toggle-text'>{darkMode ? 'Dark Mode' : 'Light Mode'}</div>
        </div>
    </div>
  )
}

export default Header;