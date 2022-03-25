//const mapDiv = document.querySelector("#map");

let coordinates = {
  lat:0,
  lng:0
}

let properties = {
  center: coordinates,
  zoom: 2
}

function getMarkers(){
  const markers = [
    {
    name: "Mexico",
    longitude: "-99.1276",
    latitude: "-19.427"
    },
    {
      name: "United States",
      longitude: "37.0902",
      latitude: "95.7129"
    },
    {
      name: "Japan",
      longitude: "36.2048",
      latitude: "138.2529"
    },
];

return markers;
}


function initMap(){
  const map = new google.maps.Map(document.querySelector('#map'), properties);

  const markers = getMarkers();

  console.log(markers)

  for(marker of markers){
    let marker = new google.maps.Marker({
      map:map,
      position: new google.LatLng(marker.latitude, marker.longitude),
      title: marker.name
    })
  }

}

