import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCaretDown  } from '@fortawesome/free-solid-svg-icons';

const Filter = () => {
  return (
    <div className='filter'>
        <div className="filter-header">
            <p className='filter-text'>Filter by region</p>
            <div className="filter-icon">
            <FontAwesomeIcon icon={faCaretDown} />
            </div>
        </div>
    </div>
  )
}

export default Filter
