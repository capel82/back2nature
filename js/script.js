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


//initiate google map, centering at Langkawi
function initMap(){
  var centerMap = {
    zoom:11,
    center:{lat:6.3500, lng:99.8000}
};
var map = new google.maps.Map(document.getElementById('map'), centerMap);

//details of multiple markers
var multipleMarkers = [
  {location:{lat:6.2956, lng:99.7228},
  content:'<h6> Cenang Beach </h6>' + '<a href="http://www.langkawi-info.com/cenang/">'+
            'http://www.langkawi-info.com/cenang/</a> '+ '<img src="images/cenang.jpg">'},
  {location:{lat:6.4544, lng:99.8219},
  content:'<h6> Tanjung Rhu </h6>' + '<a href="http://www.langkawi-info.com/tanjung-rhu/">'+
            'http://www.langkawi-info.com/tanjung-rhu/</a> '+ '<img src="images/beach.jpg">',},
  {location:{lat:6.3711, lng:99.6717},
  content:'<h6> Cable Car and Skybridge </h6>'+ '<a href="http://www.panoramalangkawi.com/">'+
            'http://www.panoramalangkawi.com/</a> ' + '<img src="images/skybridge.jpg">'},
  {location:{lat:6.4030, lng:99.7127},
  content:'<h6> Crocodile Adventureland </h6>' + '<a href="http://www.crocodileadventureland.com/">'+
            'http://www.crocodileadventureland.com/</a> '+'<img src="images/crocfarm.jpg">' },
  {location:{lat:6.4340, lng:99.7082},
  content:'<h6> Temurun Waterfall </h6>' + '<a href="https://www.langkawi-insight.com/langkawi_0000ae.htm">'+
            'https://www.langkawi-insight.com/langkawi_0000ae.htm</a>' + '<img src="images/temurun.jpg">'},
  {location:{lat:6.4059, lng:99.8597},
  content:'<h6> Geopark Mangrove </h6>' + '<a href="https://langkawimangrove.com/">'+
            'https://langkawimangrove.com/</a> '+ '<img src="images/mangrovepark.jpg">'},
  {location:{lat:6.3878, lng:99.8597},
  content:'<h6> Wildlife Park </h6>' + '<a href="https://langkawiwildlifepark.com/">'+
            'https://langkawiwildlifepark.com/</a> '+ '<img src="images/hornbill.jpg">'},
  {location:{lat:6.3831, lng:99.6741},
  content:'<h6> Seven Wells Waterfall </h6>' + '<a href="https://www.langkawi-insight.com/langkawi_0000ac.htm">'+
            'https://www.langkawi-insight.com/langkawi_0000ac.htm</a> '+ '<img src="images/waterfall.JPG">'},
  {location:{lat:6.2877, lng:99.7286},
  content:'<h6>  Langkawi Underwater World </h6>' + '<a href="https://www.langkawi-insight.com/langkawi_0000ac.htm">'+
            'https://www.langkawi-insight.com/langkawi_0000ac.htm</a> ' + '<img src="images/Dugong.jpeg">'}

  ];
//loops through details of multiple markers  
  for (var i =0; i < multipleMarkers.length; i++){
    addMarker(multipleMarkers[i]);
  }

//function for addMarker to allow multiple markers on the map
var activeWindow;

function addMarker(coords){
  var marker = new google.maps.Marker({
  position:coords.location,
  map:map,
  animation:google.maps.Animation.DROP,
  });

  if (coords.content){
    var infowindow = new google.maps.InfoWindow ({
      content:coords.content
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

