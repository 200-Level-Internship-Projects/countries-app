

const Flag = ({country}) => {

  return (
        <div className='card-img'>
          <img src={country.flags.png} alt="Image" />
        </div>
      );
    };


export default Flag