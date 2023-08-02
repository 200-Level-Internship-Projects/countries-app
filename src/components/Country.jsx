import Flag from './Flag';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Country = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <Link className={`country-card ${darkMode ? 'dark-theme' : 'light-theme'}`} to='/about'>
        <Flag/>
        <div className="card-info">
            <h1 className="country-name">Country</h1>
            <p className="population"><span>Population: </span>124444</p>
            <p className="region"><span>Region: </span>12233</p>
            <p className="capital"><span>Capital: </span>1233333</p>
        </div>
    </Link>
  )
}

export default Country