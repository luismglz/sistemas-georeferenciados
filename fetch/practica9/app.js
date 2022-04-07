
function initMap(){


  let styleMap = new google.maps.StyledMapType([
    { elementType: 'geometry', stylers: [{ color: '#242f3e'}]},
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#7f97b8' }] },
    {
      featureType: 'poi',
      elementType: 'label.text.fill',
      stylers: [{ color:'#2d65b3'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }]
    },
  ], {name: 'Dark Mode'});


  let properties = {
    center: {
      lat: 35.718008201206054,
      lng: 139.78970612599443
    },
    zoom: 18,
    mapTypeControlOptions: ['roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
  };

  let map = document.getElementById('map');

  let mapGoogle = new google.maps.Map(map, properties);

  mapGoogle.mapTypes.set('style_map', styleMap);
  mapGoogle.setMapTypeId('style_map')


}