//const mapDiv = document.querySelector("#map");

let coordinates = {
  lat: 0,
  lng: 0
}

let properties = {
  center: coordinates,
  zoom: 2
}

function getMarkers(){
  const markers = [
    /*{
    name: "Mexico",
    latitude: "-99.13312",
    longitude: "19.43339"
    },
    */
    {
      name: "México",
      longitude: "-99.1276",
      latitude: "19.427"
    }, 
    {
      name: "United States",
      longitude: "-118.475768",
      latitude: "33.995237",
    },
    {
      name: "Japan",
      longitude: "139.70057",
      latitude: "35.65947"
    },
    {
      name: "India",
      longitude: "77.2090",
      latitude: "28.6139"
    },
    {
      name: "Israel",
      longitude: "35.22150",
      latitude: "31.78094"
    },
    {
      name: "Italy",
      longitude: "12.49312",
      latitude: "41.88924"
    },
    {
      name: "Saudi Arabia",
      longitude: "46.672547",
      latitude: "24.712247"
    },
];
//console.log(markers)
return markers;
};


function initMap(){
  const map = new google.maps.Map(document.getElementById('map'), properties);

  const markers = getMarkers();

  //console.log(markers)

  for(item of markers){
    let marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(item.latitude, item.longitude),
      title: item.name
    });
    
  }

}

