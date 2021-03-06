let coordinates = {
  lat:12.12121,
  lng: 12.12312
}

const locations = [
  { lat: 22.316668, lng: 114.183334 }, //KOWLOON A
  { lat: 19.3327940, lng: -99.2125548 }, //CDMX B
  { lat: 20.680933, lng: -103.462491 }, //GDL C
  { lat: 21.161728, lng: -101.686310 }, //LEON D
  { lat: 41.4981238, lng: 2.1567566 }, //ESPAÑA E
  { lat: 25.689432, lng: -100.317024 }, //MONTERREY F 
  { lat: 41.890540, lng: 12.493813 },//ITALIA G
  { lat: 36.161218, lng: -115.146309 },// LAS VEGAS H
  { lat: 19.702806, lng: -101.192321 },//MORELIA I
  { lat: -34.616385, lng: -58.381344 },// ARGENTINA J
  { lat: 35.683730, lng: 139.767327 }, //TOKYO K
  { lat: 55.756816, lng: 37.617790 },//RUSIA L
  { lat: 31.229804, lng: 121.466993 },//CHINA M
  { lat: 40.766467, lng: -73.971459 },//NUEVA YORK N
  { lat: 64.803980, lng: -150.929412 },//ALASKA O
  { lat: 49.280711, lng: -123.117707 },//VANCOUVER P
  { lat: 34.672314, lng: 135.484802 },//OSAKA Q
  { lat: 59.913594, lng: 10.753161 },//NORGUEGA R
  { lat: 48.858787, lng: 2.292927 },//FRANCIA S
  { lat: 12.972442, lng: 77.580643 },//BANGALORE T
  { lat: 32.771877, lng: -96.796294 },//DALLAS U
  { lat: 21.305364, lng: -157.858254 },//HAWAII V
  { lat: -21.441783, lng: 46.157604 },//MADAGASCAR W
  { lat: 25.196866, lng: 55.263843 }//DUBAI X
];

initMap();

function initMap(){
  let map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: coordinates,
      zoom: 3
    }
  );

  let markers = [];

  let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let counter = 1;

  locations.forEach(location => {
    console.log(location);

    let marker = new google.maps.Marker({
      map: map,
      position: location,
      label: labels[ counter % labels.length]


    });

    markers.push(marker);
    counter++;
  });

  let markerClusterer = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    gridSize: 60,
    maxZoom: 10
  });

  document.querySelector('#btnRoadmap').addEventListener('click',() => {
    map.setMapTypeId('roadmap')
  })

  document.querySelector('#btnSatellite').addEventListener('click', () => {
    map.setMapTypeId('satellite')
  })

  document.querySelector('#btnHybrid').addEventListener('click', () => {
    map.setMapTypeId('hybrid')
  })

  document.querySelector('#btnTerrain').addEventListener('click', () => {
    map.setMapTypeId('terrain')
  })
  
}