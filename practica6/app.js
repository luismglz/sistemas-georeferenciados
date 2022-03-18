var map;
var coordenadas = {
  lat: 0,
  lng: 0
}

var propiedades = {
  center: coordenadas,
  zoom: 20,

}

function iniciarMapa() {
  map = new google.maps.Map(document.getElementById("map"), propiedades);
  var icono = {
    url: "https://media.giphy.com/media/9373avvwwdeghUnZfF/giphy.gif",
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  }

  var marker = new google.maps.Marker({
    postion: coordenadas,
    icon: icono,
    map
  });

  if (navigator.geolocation) {
    setInterval(() => moverPosition(marker), 2000)
  }
}

function moverPosition(marker) {
  navigator.geolocation.getCurrentPosition(position => {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    marker.setPosition(pos);
    map.panTo(pos)
    map.setCenter(pos);
  })
}