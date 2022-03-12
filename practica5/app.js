let placeContent =`
<h1>De La Salle Bajío University</h1>
<br/>
<p><strong>Address: Av Universidad 602, Lomas del Campestre</strong></p>
<br/>
<p><strong>Phone: 477 710 8500</strong></p>
`;


function initMap() {
  var properties = {
    center: {
      lat: 21.152162, lng: -101.711022
    },
    zoom: 50
  }
  const mapDiv = document.querySelector("#map");

  const map = new google.maps.Map(mapDiv, properties);
  if (navigator.geolocation) {


    navigator.geolocation.getCurrentPosition(position => {
      let positionObj = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      let pinProperties = {
        position: positionObj,
        map,
        title: "Pin"
      }
      const pin = new google.maps.Marker(pinProperties);
      map.setCenter(positionObj);

      const infoWindow = new google.maps.InfoWindow({
        content: placeContent
      });
      pin.addListener("click", () => {
        infoWindow.open(map, pin);
      });
    });
  }
}