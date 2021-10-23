function myMap() {
    var myLatlng = new google.maps.LatLng(50.26693427549852, 18.938536897162752);
    var mapOptions = {
      zoom: 15,
      center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });

    marker.setMap(map); 
}