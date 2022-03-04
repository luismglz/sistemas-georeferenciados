
let browser = document.querySelector('#browser');

let data = browser.getElementsByTagName("li");



function getData(){
  
  browser.innerHTML = `
  <div class="card" style="width: 40rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-start"><span class="fw-bold">Browser name: </span>${navigator.userAgent} </li>
    <li class="list-group-item text-start"><span class="fw-bold">Browser Version: </span>${navigator.appVersion} </li>
    <li class="list-group-item text-start"><span class="fw-bold">Network status: </span>${navigator.onLine} </li>
    <li class="list-group-item text-start"><span class="fw-bold">Browser Vendor: </span>${navigator.vendor} </li>
  </ul>
</div>
  `





}