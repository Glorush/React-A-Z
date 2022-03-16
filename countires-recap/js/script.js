function loadCountris(){
  fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountris(data))
  }

const displayCountris = countris => {
  console.log(countris[0]);
  const countrishtml = countris.map(countri => getcountriHTML(countri));
  // console.log(countrishtml);
  const showHTML = document.getElementById('countris');
  showHTML.innerHTML = countrishtml.join(' ');

}

// Orginal 
// const getcountriHTML = country =>{
//   return `
//     <div class="country_items">
//       <h1>${country.name}</h1>
//       <img src="${country.flag}" alt="flage">
//     </div>
//   `
// }

// Option 1 destructuring
// const getcountriHTML = country =>{
//   const {name, flag} = country;
//   return `
//     <div class="country_items">
//       <h1>${name}</h1>
//       <img src="${flag}" alt="flage">
//     </div>
//   `
// }


// Option 2 destructuring
const getcountriHTML = ({name, flag}) =>{
  return `
    <div class="country_items">
      <h1>${name}</h1>
      <img src="${flag}" alt="flage">
    </div>
  `
}

loadCountris();