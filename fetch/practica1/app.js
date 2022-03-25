const countries = document.querySelector('#countries');

fetch("data.json")
  .then( response => response.json())
  .then( data => displayData(data))


function displayData(data) {

  data.forEach(item => {
    countries.innerHTML += `
    <br/>
      <div class="col-xs-2 col-md-5 col-lg-3 col-xl-2">
        <div class="card d-flex align-items-center my-3  p-0">
          <img alt="country flag image" src="${item.flag}" class="py-2 mt-2"/>
          <p class="country-name">${item.country}</p>
          <p>Active cases: <span>${item.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</span></p>
        </div>
      </div>
    `
  });
  
}
