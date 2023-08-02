import Country from './country';
import '../App.css';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Countries = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`countries ${darkMode ? 'dark-theme' : 'light-theme'}`}>
        <Country/>
        <Country/>
        <Country/>
        <Country/>
        <Country/>
        <Country/>
        <Country/>
        <Country/>
    </div>
  )
}


export default Countries