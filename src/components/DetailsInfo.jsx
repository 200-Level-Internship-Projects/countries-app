import '../App.css';
import BorderLink from './BorderLink';


const DetailsInfo = () => {
  return (
    <div className='details-info'>
        <div className="flag">
            {/* Country flag here */}
        </div>
        <div className="country-info">
            <div className='details-name'>Country</div>
            <div className='country-text'>
                <div className="column-1">
                    <p><span>Native Name:</span>rrrrrrrrrrrr</p>
                    <p><span>Population:</span>cccccccccccccc</p>
                    <p><span>Region:</span>sssssssss</p>
                    <p><span>Sub Region:</span>ssssssss</p>
                    <p><span>Capital:</span>cccccccccc</p>
                </div>
                <div className="column-2">
                    <p><span>Top Level Domain:</span>cccccc</p>
                    <p><span>Currencies:</span>qqqqqqqq</p>
                    <p><span>Languages:</span>yyyyyyyyy</p>
                </div>
            </div>
            <div className="border-countries">
                <p>Border Countries:</p>
                <BorderLink/>
                <BorderLink/>
                <BorderLink/>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default DetailsInfo