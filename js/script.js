//to initiate modal on clicking 'private tour'button
document.getElementById('private').addEventListener('click', 
      function(){
      document.querySelector('.bg-modal').style.display ='flex';
  });
//to close modal
      document.querySelector('.close').addEventListener('click', 
      function(){
      document.querySelector('.bg-modal').style.display ='none';
  });


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
  content:'<h6> Cenang Beach </h6>' + '<a href="http://www.langkawi-info.com/cenang/">'+
            'http://www.langkawi-info.com/cenang/</a> '
});
addMarker({
  coords:{lat:6.4544, lng:99.8219},
  content:'<h6> Tanjung Rhu </h6>' + '<a href="http://www.langkawi-info.com/tanjung-rhu/">'+
            'http://www.langkawi-info.com/tanjung-rhu/</a> '
});
addMarker({
  coords:{lat:6.3711, lng:99.6717},
  content:'<h6> Cable Car and Skybridge </h6>'+ '<a href="http://www.panoramalangkawi.com/">'+
            'http://www.panoramalangkawi.com/</a> '
});
addMarker({
  coords:{lat:6.4030, lng:99.7127},
  content:'<h6> Crocodile Adventureland </h6>' + '<a href="http://www.crocodileadventureland.com/">'+
            'http://www.crocodileadventureland.com/</a> '
});
addMarker({
  coords:{lat:6.4340, lng:99.7082},
  content:'<h6> Temurun Waterfall </h6>' + '<a href="https://www.langkawi-insight.com/langkawi_0000ae.htm">'+
            'https://www.langkawi-insight.com/langkawi_0000ae.htm</a> '
});
addMarker({
  coords:{lat:6.4059, lng:99.8597},
  content:'<h6> Geopark Mangrove </h6>' + '<a href="https://langkawimangrove.com/">'+
            'https://langkawimangrove.com/</a> '
});
addMarker({
  coords:{lat:6.3878, lng:99.8597},
  content:'<h6> Wildlife Park </h6>' + '<a href="https://langkawiwildlifepark.com/">'+
            'https://langkawiwildlifepark.com/</a> '
});
addMarker({
  coords:{lat:6.3831, lng:99.6741},
  content:'<h6> Seven Wells Waterfall </h6>' + '<a href="https://www.langkawi-insight.com/langkawi_0000ac.htm">'+
            'https://www.langkawi-insight.com/langkawi_0000ac.htm</a> '
});


//function for addMarker
var activeWindow;
function addMarker(props){
  var marker = new google.maps.Marker({
  position:props.coords,
  map:map,
  animation:google.maps.Animation.DROP,
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