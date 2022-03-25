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
    latitude: "-99.13312",
    longitude: "19.43339"
    },
    {
      name: "United States",
      latitude: "95.7129",
      longitude: "37.0902"
    },
    {
      name: "Japan",
      latitude: "139.70057",
      longitude: "35.65947"
    },
    {
      name: "India",
      latitude: "77.2090",
      longitude: "28.6139"
    },
    {
      name: "Israel",
      latitude: "35.22150",
      longitude: "31.78094"
    },
];
//console.log(markers)
return markers;
}


function initMap(){
  const map = new google.maps.Map(document.getElementById('map'), properties);

  const markers = getMarkers();

  //console.log(markers)

  for(item of markers){
    let marker = new google.maps.Marker({
      map:map,
      position: new google.maps.LatLng(item.latitude, item.longitude),
      title: item.name
    });
    
  }

}

