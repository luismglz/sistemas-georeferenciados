let map = document.querySelector('#map');

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  map.innerHTML = "Latitude: " + position.coords.latitude + "<br/>" + "Longitude: " + position.coords.longitude;
}