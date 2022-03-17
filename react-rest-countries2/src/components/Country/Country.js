import React from 'react';
import "./Country.css";

const Country = (props) => {
  const {name, capital, area, flag} = props.country ;
  return (
    <div className="Single_country">
      <h1>Country Name: {name}</h1>
      <h2>Capital: {capital}</h2>
      <h3>Area: {area}</h3>
      <img src={flag} alt="Country Flag" />
    </div>
  );
};

export default Country;