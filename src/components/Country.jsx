import { useHistory } from 'react-router-dom';

const Country = () => {

  const history = useHistory();
  const handleButtonClick = () => {
    // Navigate to the next page when the button is clicked
    history.push('/next-page'); // Replace '/next-page' with the path of the next page you want to navigate to
  };
  return (
    <div className="country-card" onClick={handleButtonClick}>
        <div className="card-img">
            {/* <img src="../assets//react.svg"  alt="kdkdkd" /> */}
        </div>
        <div className="card-info">
            <h1 className="country-name">Country</h1>
            <p className="population"><span>Population: </span>124444</p>
            <p className="region"><span>Region: </span>12233</p>
            <p className="capital"><span>Capital: </span>1233333</p>
        </div>
    </div>
  )
}

export default Country