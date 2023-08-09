
const Country = ({name, population, region, capital, flag, goToDetails, code, alt}) => {

    const goToHandler = () => {
        goToDetails(code);
    }
    let formattedCapital = Array.isArray(capital) ? capital.join(', ') : capital;

    return (
        <div className="country" onClick={goToHandler}>
            <div className="flag-container">
                <img src={flag} alt={alt} />
            </div>
            <div className="details">
                <h3 className="country-name">{name}</h3>
                <p className="population"><span>Population:</span> {population.toLocaleString()}</p>
                <p className="region"><span>Region: </span>{region}</p>
                <p className="capital"><span>Capital:</span> {formattedCapital}</p>
            </div>
        </div>
    )
}

export default Country