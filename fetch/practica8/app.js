


let coordinates = {
  lat: 29.099358,
  lng: -110.956896
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const language = urlParams.get("language");

let script = document.createElement('script');

script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCMrQgga-C5zCuZLTVk2MPVzX7naqKZXZU&callback=initMap&language=${language}`;

document.head.appendChild(script);

function initMap() {
  let map = new google.maps.Map(document.getElementById("map"),
  {
    center: coordinates,
    zoom: 3
  }
 );
}




