import Flag from './Flag';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import ThemeContext from './ThemeContext';


const Country = ({country}) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Link className={`country-card ${darkMode ? 'dark-theme' : 'light-theme'}`} to='/about'>
    <div className="flag">
      <Flag country={country} />
    </div>
    <div className="card-info">
        <h1 className="country-name">{country.name.common}</h1>
        <p className="population"><span>Population: </span>{country.population}</p>
        <p className="region"><span>Region: </span>{country.region}</p>
        <p className="capital"><span>Capital: </span>{country.capital}</p>
    </div>
</Link>
  )
}

export default Country