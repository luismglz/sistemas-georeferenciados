function initMap() {
  let coordinates = {
    lat: 22.310885707917485,
    lng: 114.17102910863792
  }

  let propsMap1 = {
    center: coordinates,
    zoom: 17,
    disableDefaultUI: true
  }
  let map1 = new google.maps.Map(document.getElementById('map1'), propsMap1);

  let propsMap2 = {
    center: coordinates,
    zoom: 17,
    disableDefaultUI: true
  }
  let map2 = new google.maps.Map(document.getElementById('map2'), propsMap2);

  let propsMap3 = {
    center: coordinates,
    zoom: 17,
    zoomControl: false,
    scaleControl: false
  }
  let map3 = new google.maps.Map(document.getElementById('map3'), propsMap3);

  let propsMap4 = {
    center: coordinates,
    zoom: 17,
    mapTypeControl: true,
    mapTypeControlOption: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'satellite', 'terrain']
    }

  }
  let map4 = new google.maps.Map(document.getElementById('map4'), propsMap4);

  let propsMap5 = {
    center: coordinates,
    zoom: 17,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    fullscreenControl: true
  }
  let map5 = new google.maps.Map(document.getElementById('map5'), propsMap5);


  let limits = {
    north: 22.345092,
    south: 22.273639,
    west: 22.313244,
    east: 22.310990,
  }


  let propsMap6 = {
    center: coordinates,
    zoom: 17,
    restriction: {
      latLngBounds: limits,
      strictBounds: false
    }

  }
  let map6 = new google.maps.Map(document.getElementById('map6'), propsMap6);

  let propsMap7 = {
    center: coordinates,
    zoom: 17,
    mapTypeId: true,
    mapTypeControlOption: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER
    }

  }
  map7 = new google.maps.Map(document.getElementById('map7'), propsMap7);

}