
AOS.init();

const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", () => {
  document.body.scrollIntoView();
})



(function initMap() {
  let coordinates = {
    latitude: 35.692226,
    longitude: 139.767086
  }



  let map = new google.maps.Map(
    document.querySelector('#map'),
    {
      center: coordinates,
      zoom: 15,
      pin: pin
    }
  );

  let pin = new google.maps.Marker({
    position: coordinates,
    map: map
  });

})()





