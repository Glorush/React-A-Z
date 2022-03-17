import React from 'react';
import './Country.css';

const Country = (props) => {
  // console.log(props.country);
  // now we destracturing in object 
  const {name, area, capital, flag} = props.country;
  
  return (
    <div className='countries'>
      <h1>Country Name: {name}</h1>
      <h2>Capital: {capital}</h2>
      <img  src={flag} alt="Flage" />
    </div>
  );
};

export default Country;