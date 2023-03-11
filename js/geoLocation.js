let coords = {};

navigator.geolocation.getCurrentPosition(function(position){
    console.log(position.coords);
    coords = position.coords;
    // openMap();
}, function (err) {
    console.log(err)
});

function openMap(){
    // let map_url = "https://www.google.com/maps/@" + coords.latitude + "," + coords.longitude;

    activeGeolocation = document.querySelector('.geolocation');
    // activeGeolocation.src = map_url;
    // activeGeolocation.innerHTML = map_url;
    var latlon = coords.latitude + "," + coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    activeGeolocation.setAttribute('src', img_url);

    // activeGeolocation.innerHTML = "<img src='"+img_url+"'>";
}

// Send email js
function sendEmailJs() {
    let btnSubmitJs = document.querySelector('.submit-js');
    btnSubmitJs.onclick = function() {
      var params = {
        from_name : document.querySelector('.name-js').value,
        email : document.querySelector('.email-js').value,
        phone : document.querySelector('.phone-js').value,
        address : document.querySelector('.address-js').value,
        content : document.querySelector('.content-js').value,
      }
      emailjs.send("service_qqo4k0f", "template_qyvpexe", params).then(function(res) {
        alert("Success!" + res.status);
      })
    }
  }

sendEmailJs();