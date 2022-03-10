
AOS.init();

const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", () => {
  document.body.scrollIntoView();
})


function initMap() {
  let coordinates = {
    lat: 35.692226,
    lng: 139.767086
  }



  let map = new google.maps.Map(
    document.querySelector('#map'),
    {
      center: coordinates,
      zoom: 20,
    }
  );

  let pin = new google.maps.Marker({
    position: coordinates,
    map: map
  });

}




