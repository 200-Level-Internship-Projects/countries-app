import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';

const CountryDetails = ({ darkMode, countries, goToDetails, refetch }) => {
  const params = useParams();
  const navigate = useNavigate();


  const goBack = () => {
    navigate(-1)
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
  let formattedCapital;
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
      formattedCapital = Array.isArray(capital) ? capital.join(', ') : capital;
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
              <p><span>Population:</span>{population.toLocaleString()}</p>
              <p><span>Region:</span>{region}</p>
              <p><span>Sub Region:</span>{subregion}</p>
            </div>
            <div className="right-info">
              <p><span>Capital:</span>{formattedCapital}</p>
              <p><span>Top Level Domain:</span>{topLevelDomain}</p>
              <p><span>Currencies:</span>
                {Object.keys(currencies).map((currencyCode, index, array) => {
                  const currency = currencies[currencyCode];
                  const { name, symbol } = currency;

                  return (
                    <span className='light' key={currencyCode}>
                      {name} ({symbol})
                      {index !== array.length - 1 ? ', ' : ''}
                    </span>
                  );
                })}
              </p>
              <p><span>Languages:</span>
                {Object.keys(languages).map((languageCode, index, array) => {
                  const languageName = languages[languageCode];

                  return (
                    <span key={languageCode} className='light'>
                      {languageName}
                      {index !== array.length - 1 ? ', ' : ''}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="border-countries">
            <p>Border Countries:</p>
            {borders.length ? (
              borders.map((borderCountryCode, index, array) => (
                <div className="border-country" key={borderCountryCode} onClick={() => {
                  refetch();
                  navigate(`/${borderCountryCode}`);
                }}>
                  <button>{borderCountryCode}</button>
                  {index !== array.length - 1 ? ', ' : ''}
                </div>
              ))
            ) : (
              <div>No borders</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails



