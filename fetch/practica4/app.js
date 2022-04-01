
var coordenadas = {
  lat: 0,
  lng: 0
}

var propiedades = {
  center: coordenadas,
  zoom: 2
}



function initMap() {


  fetch('countries.json')
    .then(response =>{

      response.json()
      .then(datos => {

        const map = new google.maps.Map(document.getElementById('map'), propiedades);

        datos.forEach(marcador => {

          var informacion = "<strong>País:</strong> " + marcador.CountryName;

          var infowindow = new google.maps.InfoWindow({
            content: informacion
          });

          let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(marcador.CapitalLatitude, marcador.CapitalLongitude),
            title: marcador.CountryName
          });

          marker.addListener('click', function () {
            infowindow.open(map, marker);
          });

        });
      });
    })
    .catch(function (error) {
      console.log(error.message);
    });


}


