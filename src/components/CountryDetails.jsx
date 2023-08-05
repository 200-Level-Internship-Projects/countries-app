import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CountryDetails = ({darkMode}) => {
  return (
    <div className="country-details">
      <button className={`back ${darkMode ? 'darkMode' : ''}`}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Back</p>
      </button>
      <div className="country-details-body">
        <div className="country-details-flag">
          <img src="https://flagcdn.com/ng.svg" alt="flag" />
        </div>
        <div className="country-details-info">
          <h2 className='country-name'>Nigeria</h2>
          <div className="info">
            <div className="left-info">
              <p><span>Native Name:</span></p>
              <p><span>Population:</span></p>
              <p><span>Region:</span></p>
              <p><span>Sub Region:</span></p>
            </div>
            <div className="right-info">
              <p><span>Capital:</span></p>
              <p><span>Top Level Domain:</span></p>
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