
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Header = ({onClick, darkMode}) => {
  return (
    <div className={`header ${darkMode ? 'darkMode' : ''}`}>
        <div className="logo">Where in the world?</div>
        <div className="toggle" onClick={onClick}>
             <div className="toggle-img">
             <FontAwesomeIcon icon={faMoon} className='toggle-icon'/>
             </div>
             <div className="toggle-text" id='toggle-text'>Dark Mode</div>
         </div>
    </div>
  )
}

export default Header