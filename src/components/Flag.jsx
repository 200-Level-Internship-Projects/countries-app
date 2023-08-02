import { useState, useEffect } from 'react';

const Flag = () => {
  const [imageSource, setImageSource] = useState('');

    const GetFlagSource = async () =>{
        const response = await fetch('https://restcountries.com');

        if (!response.ok) throw new Error("Something went wrong!");

        const data = await response.json();

        setImageSource(data[0].flag.svg);
  
        console.log(data);
      }
    useEffect(() => {
      GetFlagSource();
      }, []);

  return (
        <div className='card-img'>
          <img src={imageSource} alt="Image" />
        </div>
      );
    };


export default Flag