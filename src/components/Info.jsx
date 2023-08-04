import '../App.css';
import BorderLink from './BorderLink';
import Flag from './Flag'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Info = () => {

    const [country, setCountry] = useState([]);
  
    const { countryName } = useParams();
  
    // const borders = country.map((country) => country.borders);
  
    useEffect(() => {
      const getCountryByName = async () => {
        try {
          const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  
          if (!res.ok) throw new Error("Could not found!");
  
          const data = await res.json();
  
          setCountry(data);
        } catch (error) {
            console.log("error");
        }
      };
  
      getCountryByName();
    }, [countryName]);

  return (
    <div className='details-info'>
        <div className="flag">
            <Flag />
        </div>
        <div className="country-info">
            <div className='details-name'>{country.name.common}</div>
            <div className='country-text'>
                <div className="column-1">
                    <p><span>Native Name:</span>{country.name.native}</p>
                    <p><span>Population:</span>{country.population}</p>
                    <p><span>Region:</span>{country.region}</p>
                    <p><span>Sub Region:</span>{country.subregion}</p>
                    <p><span>Capital:</span>{country.capital}</p>
                </div>
                <div className="column-2">
                    <p><span>Top Level Domain:</span>cccccc</p>
                    <p><span>Currencies:</span>qqqqqqqq</p>
                    <p><span>Languages:</span>yyyyyyyyy</p>
                </div>
            </div>
            <div className="border-countries">
                <p>Border Countries:</p>
                <BorderLink/>
                <BorderLink/>
                <BorderLink/>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Info