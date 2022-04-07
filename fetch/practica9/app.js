
function initMap(){
  let properties = {
    center: {
      lat:21.152639,
      lng: -101.711598
    },
    zoom: 14
  };

  let map = document.getElementById('map');

  let mapGoogle = new google.maps.Map(map, properties);

  
}