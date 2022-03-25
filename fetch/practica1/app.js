const countries = document.querySelector('#countries');

fetch("data.json")
  .then( response => response.json())
  .then( data => displayData(data))


function displayData(data) {


  data.forEach(item => {

    countries.innerHTML += `
    <br/>
    <p>Country: <span>${item.country}</span></p>
    <p>Number of cases: <span>${item.cases}</span></p>
    `
  });
  
}
