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
    url: "https://media.giphy.com/media/1oF1MaxVOqrgtG4hev/giphy.gif",
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

        <div class="row col-9 col-sm-12 col-xl-6 card" id="card">
          <div class="col-12 col-sm-12">
            <p><span>Coordinates:&nbsp</span> ${ coordinates}</p>
            <p><span>Precision:&nbsp</span> ${ precision}</p>
            <p><span>Altitude:&nbsp</span> ${ altitude}</p>
            <p><span>Speed:&nbsp</span> ${ speed}</p>
            <p><span>Date:&nbsp</span> ${ dateTracking}</p>
          </div>
         </div>

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
        const htmlStopTracking = `
         <div class="row col-6 card" id="card">
          <div class="col-12 md:col-6">
            <p class="fs-3 fw-bold">Tracking stopped</p>
          </div>
         </div>


        `;
        const data = document.getElementById('data');
        data.innerHTML = htmlStopTracking;
      }
    });


  }


  function error(positionError) {
    console.log(positionError.messsage);
  }



}
