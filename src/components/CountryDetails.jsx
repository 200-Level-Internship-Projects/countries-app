import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';

const CountryDetails = ({ darkMode, countries, goToDetails, refetch }) => {
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
  let alt;
  let currencies = [];
  let borders = [];
  let languages = [];

  countries.forEach(country => {
    if (country.cca3 === params.countryCode) {
      name = country.name.common;
      nativeName = country.name.official;
      flag = country.flags.svg;
      alt = country.flags.alt;
      capital = country.capital;
      subregion = country.subregion;
      region = country.region;
      topLevelDomain = country.tld;
      population = country.population;
      currencies = country.currencies;
      languages = country.languages;
      borders = country.borders;
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
          <img src={flag} alt={alt} />
        </div>
        <div className="country-details-info">
          <h2 className='country-name'>{name}</h2>
          <div className="info">
            <div className="left-info">
              <p><span>Native Name:</span>{nativeName}</p>
              <p><span>Population:</span>{population}</p>
              <p><span>Region:</span>{region}</p>
              <p><span>Sub Region:</span>{subregion}</p>
            </div>
            <div className="right-info">
              <p><span>Capital:</span>{capital}</p>
              <p><span>Top Level Domain:</span>{topLevelDomain}</p>
              <p><span>Currencies:</span>
                {/* {currencies.map(currency => {
                  if (currencies.indexOf(currency) != -1) {
                    return (`${currency.name},`)
                  }
                  else {
                    return (`${ currency.name }`)
                  }
                })} */}
                </p>
              <p><span>Languages:</span>
                {/* {languages.map(language => {
                  if (languages.indexOf(language) != -1) {
                    return (`${language},`)
                  }
                  else {
                    return ({ language })
                  }
                })} */}
                </p>
            </div>
          </div>
          <div className="border-countries">
            <p>Border Countries:</p>
            {/* {borders.length ? (
              borders.map(border =>
                <div className='border-country' key={border} onClick={
                  () =>{
                    refetch();
                    navigate(`/${border}`);
                  }
                }>
                  <button>{border}</button>
                </div>)) :
              (<div>No borders</div>)} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails



