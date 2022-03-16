import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1>Show all Wide Countirs </h1>
      <LoadCountris></LoadCountris>



    </div>
  );
}


// component 
function LoadCountris(){

  // State 
  const [countries, setCountris] = useState([]);

  // Load Data 
  useEffect(() =>{
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountris(data))
  },[])

  return <div>
    
      {
        // Ceate Singe country vale
         countries.map(country => <Countries name={country.name} capital={country.capital}></Countries>)
      }
    </div>
    
}

// Send/Get Data 
function Countries(props) {
  return <div>
    <h2>Name: {props.name}</h2>
    <h3>Capital: {props.capital}</h3>
  </div>
}



export default App;
