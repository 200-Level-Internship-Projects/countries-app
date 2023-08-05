import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';

const CountryDetails = ({ darkMode, countries }) => {
  const params = useParams();
  const navigate = useNavigate();
  

  const goBack = () => {
    navigate('/')
  }
  let name;
  let nativeName;
  let flag;
  let capital;
  let region;
  let population;
  let subregion;
  let topLevelDomain;
  let currencies =[];
  let borders = [];
  let languages = [];


 

  countries.forEach((country) => {
    if (country.countryCode === params.countryCode) {
      name = country.name.common;
      nativeName = country.name.native;
      flag = country.flag.svg;
      capital = country.capital;
      subregion = country.subregion;
      region = country.region;
      topLevelDomain = country.topLevelDomain;
      population = country.population;
    }
  })
  return (
    <div className="country-details">
      <button className={`back ${darkMode ? 'darkMode' : ''}`} onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Back</p>
      </button>
      <div className="country-details-body">
        <div className="country-details-flag">
          <img src={flag} alt="flag" />
        </div>
        <div className="country-details-info">
          <h2 className='country-name'>{name}</h2>
          <div className="info">
            <div className="left-info">
              <p><span>Native Name:{nativeName}</span></p>
              <p><span>Population:{population}</span></p>
              <p><span>Region:</span>{region}</p>
              <p><span>Sub Region:</span>{subregion}</p>
            </div>
            <div className="right-info">
              <p><span>Capital:{capital}</span></p>
              <p><span>Top Level Domain:{topLevelDomain}</span></p>
              <p><span>Currencies:</span></p>
              <p><span>Languages:</span></p>
            </div>
          </div>
          <div className="border-countries">
            <p>Border Countries:</p>
            <div className="border-country">
              <button>Border</button>
            </div>
            <div className="border-country">
              <button>Border</button>
            </div>
            <div className="border-country">
              <button>Border</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails