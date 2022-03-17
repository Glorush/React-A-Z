import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">

      <h1>Show all Wide Countirs </h1>
      {/* <LoadCountris></LoadCountris> */}
      <Countries></Countries>

    </div>
  );
}


// // component 
// function LoadCountris(){

//   // State 
//   const [countries, setCountris] = useState([]);

//   // Load Data 
//   useEffect(() =>{
//     fetch('https://restcountries.com/v2/all')
//       .then(res => res.json())
//       .then(data => setCountris(data))
//   },[])

//   return <div>
    
//       {
//         // Ceate Singe country vale
//          countries.map(country => <Countriess name={country.name} capital={country.capital}></Countriess>)
//       }
//     </div>
    
// }

// // Send/Get Data 
// function Countriess(props) {
//   return <div>
//     <h2>Name: {props.name}</h2>
//     <h3>Capital: {props.capital}</h3>
//   </div>
// }



export default App;
