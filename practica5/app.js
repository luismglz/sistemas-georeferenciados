let info = "<h1>Tokyo, Japan</h1>"
info += "<p><strong>Address: </strong></p>"

function initMap(){
  let properties = {
    center:{
      lat: 35.692226,
      lng: 139.767086
    },
    zoom: 80
  }

  const mapElement = document.querySelector("#map");
  const map = new google.maps.Map(mapElement, properties);

  if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition( position => {
      let actualPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }

      let pinProps = {
        position: actualPosition,
        map,
        title: "Pin"
      }
    });


    const pin = new google.Map.Marker(pinProps);
    map.setCenter(position);

    const infoWindow = new google.maps.InfoWindow({
      content: info
    });

    pin.addEventListener('click', () =>{
      infoWindow.open()
    })
  }

}