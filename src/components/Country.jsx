
const Country = ({name, population, region, capital, flag, goToDetails, code}) => {

    const goToHandler = () => {
        goToDetails(code);
    }
    return (
        <div className="country" onClick={goToHandler}>
            <div className="flag-container">
                <img src={flag} alt="flag" />
            </div>
            <div className="details">
                <h3 className="country-name">{name}</h3>
                <p className="population"><span>Population:</span> {population}</p>
                <p className="region"><span>Region: </span>{region}</p>
                <p className="capital"><span>Capital:</span> {capital}</p>
            </div>
        </div>
    )
}

export default Country