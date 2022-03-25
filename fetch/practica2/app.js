const countries = document.querySelector('#countries');

fetch("countries.json")
  .then(response => response.json())
  .then(data => displayData(data))


function displayData(data) {

  console.log(data.length)

  let counter = 1;
  data.forEach(item => {

    countries.innerHTML += `
    <div class="row card m-2">
      <div class="col-8">
        <p>Country: <span>${counter} ${item.CountryName}</span></p>
      </div>
    </div>
    `
    counter ++;
  });

}
