import Header from "./components/Header";
import Country from "./components/Country";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, useNavigate } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import { useState, useEffect, useRef } from "react";

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

    if(data.status === 404){
      setCountries([]);
      return;
    }
  }

  useEffect(() => {
    try{
      getCountries()
    }catch(error){
      console.log(error);
    }
  }, [])

  const searchRef = useRef();
  const filterRef = useRef();

  const searchByName = () => {
    const searchValue = searchRef.current.value;
    if (searchValue.trim()) {
      const fetchSearch = async () =>{
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        const data = await response.json();
        setCountries(data);
      }

      try{
        fetchSearch()
      }catch(error){
        console.log(error);
      }
    }
    else{
      getCountries();
    }
  }

  const noCountry = countries.status || countries.message;

  const filterByRegion = () => {
    const filterValue = filterRef.current.value;

    if(filterValue.trim()){
      const fetchFilter = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/region/${filterValue}`)
        const data = await response.json();
        setCountries(data);
      }

      try{
        fetchFilter();
      }catch(error){
        console.log(error);
      }
    }

    else{
      getCountries();
    }
  }

  const navigate = useNavigate();

  const goToDetails = (code) =>{
    navigate(`/${code}`);
  }
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
                <input type="text" className="search-input" placeholder='Search for a country...' ref={searchRef} onChange={searchByName}/>
              </div>
              <div className={`filter ${darkMode ? 'dark-theme' : ''}`}>
                <select ref={filterRef} onChange={filterByRegion}>
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
                !noCountry ? (
                  countries.map(country => 
                    <Country darkMode = {darkMode} 
                    key={country.alpha3Code}
                    population ={country.population}
                    region = {country.region}
                    capital = {country.capital}
                    flag= {country.flags.svg}
                    name = {country.name.common}
                    goToDetails ={goToDetails}
                    code = {country.cca3} />)
                ) : <p>No Countries found...</p>
              }
            </div>
          </div>
        } />
        <Route path="/:countryCode"  element={<CountryDetails 
        darkMode={darkMode} 
        countries={countries}
        refetch={getCountries}/>}/>
      </Routes>
    </div>
  )
}

export default App