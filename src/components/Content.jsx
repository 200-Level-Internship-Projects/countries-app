import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Info from './Info';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';
const Content = () => {
  const { darkMode } = useContext(ThemeContext);
  return (

    <div className={`details-main ${darkMode ? 'dark-theme' : 'light-theme'}`}>
        <div className="back-nav">
            <div className="search-icon">
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
                <button>Back</button>
        </div>
        <Info/>
    </div>
  )
}

export default Content
