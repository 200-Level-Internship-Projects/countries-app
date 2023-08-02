import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DetailsInfo from './DetailsInfo';
const DetailsMain = () => {
  return (

    <div className='details-main'>
        <div className="back-nav">
            <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
            </div>
                <button>Back</button>
        </div>
        <DetailsInfo/>
    </div>
  )
}

export default DetailsMain
