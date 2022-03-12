let map = document.querySelector('#map');

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    const alert = document.querySelector("#alert");

    alert.innerHTML = "Browser could not get the location"

  }
}

function showPosition(position) {
  let coordinates = position.coords.latitude + "," + position.coords.longitude;

  let imageMap = document.querySelector('#mapImage');

  imageMap.src = 'https://maps.googleapis.com/maps/api/staticmap?center=' + coordinates + '&zoom=150&size=850x850&key=AIzaSyCMrQgga-C5zCuZLTVk2MPVzX7naqKZXZU'
}
