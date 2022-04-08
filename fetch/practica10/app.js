function initMap() {

  let properties = {
    center: {
      lat: 21.152639,
      lng: -101.711598
    },
    zoom: 12

  };

  const map = document.getElementById("map");

  let googleMap = new google.maps.Map(map, properties);

  let icon = {
    url: "https://media.giphy.com/media/1ZweHMlSaxcc32mSSu/giphy.gif",
    scaledSize: new google.maps.Size(25, 25),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  };

  let marker = new google.maps.Marker({
    position: { lat: 0, lng: 0 },
    icon: icon,
    map: googleMap
  });

  let watchId = null;

  const onStartTracking = document.getElementById('start');

  var positionOptions = {
    enableHighAccuracy: true,
    timeout: 10 * 1000,  //10 s
    maximumAge: 30 * 1000  //30 s
  };


  if (navigator.geolocation) {

    onStartTracking.addEventListener('click', function () {

      watchId = navigator.geolocation.watchPosition(function (position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        let coordinates = lat + ',' + lng;

        let precision = position.coords.accuracy ? position.coords.accuracy : 'Not available';
        let altitude = position.coords.altitude ? position.coords.altitude : 'Not available';
        let speed = position.coords.speed ? position.coords.speed : 'Not available';
        let dateTracking = (new Date(position.timestamp)).toString();


        const trackingDetailsHTML = `
          <p>Coordinates: ${coordinates}</p>
          <p>Precision: ${precision}</p>
          <p>Altitude: ${altitude}</p>
          <p>Speed: ${speed}</p>
          <p>Date: ${dateTracking}</p>
        `;

        const data = document.getElementById('data');
        data.innerHTML = trackingDetailsHTML;

        marker.setPosition(new google.maps.LatLng(lat, lng));
        googleMap.panTo(new google.maps.LatLng(lat, lng));

      }, error, positionOptions);
    });


    const onStopTracking = document.getElementById('stop');



    onStopTracking.addEventListener('click', function () {
      if (watchId !== null) {

        navigator.geolocation.clearWatch(watchId);
        const htmlStopTracking = `<p>Tracking stopped</p>`;
        const data = document.getElementById('data');
        data.innerHTML = htmlStopTracking;
      }
    });


  }


  function error(positionError) {
    console.log(positionError.messsage);
  }



}
