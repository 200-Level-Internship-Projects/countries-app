import Header from "./components/Header";
import Country from "./components/Country";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import { useState, useEffect } from "react";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleThemeChange = () => {
    setDarkMode((prevState) => !prevState);
  };

  const [countries, setCountries] = useState([]);
  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  }

  useEffect(() => {
    try{
      getCountries()
    }catch(error){
      console.log(error);
    }
  })
  return (
    <div className={`app ${darkMode ? 'dark-theme' : ''}`}>
      <Header onClick={handleThemeChange}  darkMode={darkMode}/>

      <Routes>
        <Route path="/" element={
          <div className="app-body">
            <div className="input">
              <div className={`search ${darkMode ? 'dark-theme' : ''}`}>
                <div className="search-icon">
                  <FontAwesomeIcon icon={faSearch} className="icon" />
                </div>
                <input type="text" className="search-input" placeholder='Search for a country...' />
              </div>
              <div className={`filter ${darkMode ? 'dark-theme' : ''}`}>
                <select>
                  <option>All</option>
                  <option>Africa</option>
                  <option>Americas</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>Oceania</option>
                </select>
              </div>
            </div>
            <div className="countries">
              {
                countries.map(country => 
                  <Country darkMode = {darkMode} 
                  key={country.name.official}
                  population ={country.population}
                  region = {country.region}
                  capital = {country.capital}
                  flag= {country.flags.svg}
                  name = {country.name.common} />)
              }
            </div>
          </div>
        } />
        <Route path="country-details" element={<CountryDetails darkMode={darkMode} />}/>
      </Routes>
    </div>
  )
}

export default App