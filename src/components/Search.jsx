import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Search = () => {
  return (
    <div className="Search">
        <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
        </div>
        <input type="text" className="search-input" placeholder='Search for a country...'/>
    </div>
  )
}

export default Search