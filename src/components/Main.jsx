import '../App.css';
import Search from './Search';
import Filter from './Filter';
import Countries from './Countries';
import { useContext, useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

const Main = () => {
  const { darkMode } = useContext(ThemeContext);

  const [countries, setCountries] = useState([]);

  // Function to display all countries
  const getAllCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');

      if (!response.ok) throw new Error("Something went wrong!");

      const data = await response.json();

      setCountries(data);

    } catch (error) {
      console.log("error");
    }
  };

  // Function filter by region
  const getCountryByRegion = async (regionName) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/region/${regionName}`);

      if (!response.ok) throw new Error("Failed..........");

      const data = await response.json();
      setCountries(data);

    } catch (error) {
      console.log("error");
    }
  };

  // Function to dispay based on search
  const getCountryByName = async (countryName) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

      if (!response.ok) throw new Error("Not found any country!");

      const data = await response.json();
      setCountries(data);


    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);




  return (
    <div className={`Main ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className="search-filter">
        <Search onSearch={getCountryByName} />
        <Filter onSelect={getCountryByRegion} />
      </div>
        <Countries key={countries} countries={countries} />
    </div>
  )
}

export default Main;