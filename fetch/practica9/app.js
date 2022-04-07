
function initMap(){


  let styleMap = new google.maps.StyledMapType([
    { elementType: 'geometry', stylers: [{ color: '#242f3e'}]},
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#7f97b8' }] }
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

  map.mapTypes.set('style_map', styleMap);
  map.setMapTypeId('style_map')


}