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
      longitude: "35.65947",
      latitude: "139.70057"
    },
    {
      name: "India",
      longitude: "28.6139",
      latitude: "77.2090"
    },
    {
      name: "Israel",
      longitude: "31.78094",
      latitude: "35.22150"
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

