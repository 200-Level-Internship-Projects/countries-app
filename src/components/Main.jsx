import '../App.css';
import Search from './Search';
import Filter from './Filter';
import Countries from './Countries';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Main = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`Main ${darkMode ? 'dark-theme' : 'light-theme'}`}>
        <div className="search-filter">
            <Search />
            <Filter />
        </div>
        <Countries />
    </div>
  )
}

export default Main;