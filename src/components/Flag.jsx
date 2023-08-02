import { useState, useEffect } from 'react';

const Flag = () => {
    const [imageLink, setImageLink] = useState('');


    useEffect(() => {
        fetch('/data.json') 
          .then((response) => response.json())
          .then((data) => setImageLink(data.imageLink))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
  return (
        <div className='card-img'>
          (<img src={imageLink} alt="Image" />)
        </div>
      );
    };

export default Flag