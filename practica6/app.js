
let map;

var coordinates = {
  lat: 0,
  lng: 0,
};


let properties = {
  center: coordinates,
  zoom: 20
};


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), properties);

  let icon = {
    url: "https://giphy.com/gifs/travel-pin-ZtJUz2AomrhiOyWhMO",
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
  }

  let pin = new google.maps.Marker({
    position: coordinates,
    icon: icon,
    map: map
  });

  if (navigator.geolocation) {
    setInterval(() => {
      moveToPosition(pin)
    }, 2000);

  }

  function moveToPosition(pin) {
    navigator.geolocation.getCurrentPosition(position => {
      let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }

      //pin.setPosition(pos);
      map.panTo(pos);
      map.setCenter(pos);

    });
  }
}