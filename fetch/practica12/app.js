function initMap(){

  var coordenadas = { 
    lat: 40.750211402271255, 
    lng: -73.98752707437586
  };

  var propiedades = {
    center: coordenadas,
    zoom: 12
  };

  //map1

  var mapa1 = new google.maps.Map(document.getElementById('map1'), propiedades);

  var marker = new google.maps.Marker({
    position: coordenadas,
    map: mapa1
  });

  marker.addListener('click', function () {
    mapa1.setZoom(8);
    mapa1.setCenter(marker.getPosition());
  });


  //map2

  var mapa2 = new google.maps.Map(document.getElementById('map2'), propiedades);

  var marker2 = new google.maps.Marker({
    position: coordenadas,
    map: mapa2
  });

  mapa2.addListener('center_changed', function () {

    window.setTimeout(function () {
      mapa2.panTo(marker2.getPosition());
    }, 3000);

  });



 //map3

  var mapa3 = new google.maps.Map(document.getElementById('map3'), propiedades);



  mapa3.addListener('zoom_changed', function () {
    

    

    var infowindow = new google.maps.InfoWindow({
      content: 'Cambia el zoom',
      position: coordenadas
    });

    
    infowindow.open(mapa3)

    //infowindow.open(mapa3);

    nivelZoom = mapa3.getZoom();

    infowindow ? infowindow.remove() : null
    infowindow.setContent('Zoom:' + nivelZoom);

  });


  //map4

  var mapa4 = new google.maps.Map(document.getElementById('map4'), propiedades);


  mapa4.addListener('click', function (e) {
    console.log(e.latLng);

    estableceMarcador(e.latLng);
  });

  function estableceMarcador(latLng) {

    var marker = new google.maps.Marker({
      position: latLng,
      map: mapa4
    });

    mapa4.panTo(latLng);

  }

  //map5

  var mapa5 = new google.maps.Map(document.getElementById('map5'), propiedades);

  var infowindow = new google.maps.InfoWindow({
    content: 'Haz click para obtener las coordenadas',
    position: coordenadas
  });

  infowindow.open(mapa5);

  mapa5.addListener('click', function (evento) {
    infowindow.close();

    infowindow = new google.maps.InfoWindow({ position: evento.latLng });
    infowindow.setContent(evento.latLng.toString());
    infowindow.open(mapa5);

  });

  //map6

  var mapa6 = new google.maps.Map(document.getElementById('map6'), propiedades);

  google.maps.event.addDomListener(mapa6, 'click', function () {
    window.alert(' Se hizo click en el mapa');
  });

  var boton = document.getElementById('btnCenter');
  google.maps.event.addDomListener(boton, 'click', function () {
    mapa6.panTo(coordenadas);
  });



}