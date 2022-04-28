function initMap(){
  let coordinates = {
    lat: 21.152639,
    lng: -101.711598
  }

  let propsMap1 = {
    center: coordinates,
    zoom: 17,
    disableDefaultUI: true
  }
  map1 = new google.maps.Map(document.getElementById('map1'), propsMap1);

  let propsMap2 = {
    center: coordinates,
    zoom: 17,
    disableDefaultUI: true
  }
  map2 = new google.maps.Map(document.getElementById('map2'), propsMap2);

  let propsMap3 = {
    center: coordinates,
    zoom: 17,
    zoomControl: false,
    scaleControl: false
  }
  map3 = new google.maps.Map(document.getElementById('map3'), propsMap3);

  let propsMap4 = {
    center: coordinates,
    zoom: 17,
    mapTypeControl: true,
    mapTypeControlOption: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'satellite', 'terrain']
    }

  }
  map4 = new google.maps.Map(document.getElementById('map4'), propsMap4);
}