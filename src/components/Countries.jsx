import Country from './Country';
import '../App.css';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Countries = ({ countries }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`countries ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      {countries.map((country) => (
        <Country key={country.name.common} country={country} />
      ))}
  </div>
  )
}


export default Countries