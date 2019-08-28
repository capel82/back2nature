//initiate google map
function initMap(){
  var options = {
    zoom:11,
    center:{lat:6.3500, lng:99.8000}
};
var map = new google.maps.Map(document.getElementById('map'), options);

//add markers details
addMarker({
  coords:{lat:6.2956, lng:99.7228},
  content:'<h6> Cenang Beach </h6>',
});
addMarker({
  coords:{lat:6.4544, lng:99.8219},
  content:'<h6> Tanjung Rhu </h6>'
});
addMarker({
  coords:{lat:6.3711, lng:99.6717},
  content:'<h6> Cable Car and Skybridge </h6>'
});
addMarker({
  coords:{lat:6.4030, lng:99.7127},
  content:'<h6> Crocodile Adventureland </h6>'
});
addMarker({
  coords:{lat:6.4340, lng:99.7082},
  content:'<h6> Temurun Waterfall </h6>'
});
addMarker({
  coords:{lat:6.4059, lng:99.8597},
  content:'<h6> Geopark Mangrove </h6>'
});
addMarker({
  coords:{lat:6.3878, lng:99.8597},
  content:'<h6> Wildlife Park </h6>'
});
addMarker({
  coords:{lat:6.3831, lng:99.6741},
  content:'<h6> Seven Wells Waterfall </h6>'
});

//function for addMarker
var activeWindow;
function addMarker(props){
  var marker = new google.maps.Marker({
  position:props.coords,
  map:map,
  });

  if (props.content){
    var infowindow = new google.maps.InfoWindow ({
      content:props.content
  });
//calling function with opening infowindow on click and closing infowindow on next click
  marker.addListener('click',function(){
    if (activeWindow){activeWindow.close();}
  infowindow.open(map, marker);
  activeWindow = infowindow;
  });

  }
  }
}