import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

// component 
const Countries = () => {
  // state 
  const [countires, setCountries] = useState([]);

  // load countires 
  useEffect( () =>{
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))

    }, []);

    // console.log(countires)

  return (
    <div className="AllCountris">
     {
       countires.map( country =>  <Country country={country} key={country.cioc}></Country>)
     }
    </div>
  );
};

export default Countries;