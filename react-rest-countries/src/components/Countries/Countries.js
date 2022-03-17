import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  
  // console.log(countries)
  useEffect( () => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))

  }, [])
    console.log(countries)
  return (
    <div className='Country_parents'>
     
      {
        // use short cut all object 
        countries.map(country => <Country 
          country={country} 
          key={country.area}>
          </Country>)
      }
    </div>
  );
};

export default Countries;