let map = document.querySelector('#map');

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  map.innerHTML = `
  <p>Latitude: ${position.coords.latitude}</p>
  <br/>
  <br/>
  <p>Longitude: ${position.coords.longitude}</p>
  `
  
}