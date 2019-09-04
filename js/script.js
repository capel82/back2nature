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
      content:coords.content,
      maxWidth:300
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

//TEMPERATURE GRAPH
// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 350 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
  

// Parse the Data
d3.csv("./langkawi_temperature.csv", function(data) {

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.Months; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end")
    
svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 40) + ")")
      .style("text-anchor", "middle")
      .text("Months");
// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 40])
  .range([ height, 0]);

svg.append("g")
    .call(d3.axisLeft(y));
    
svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text(" Average Temperatures (Degree Celcius)");      

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.Months); })
    .attr("y", function(d) { return y(d.Temperatures); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.Temperatures); })
    .attr("fill", "#17a2ba")
    .on('mouseover', function(d){
            d3.select(this)
            .style("fill", "#d2f3f9");})
    .on("mouseout", function(d) {
            d3.select(this)
            .transition()
            .duration(300)
            .style("fill", "#17a2ba");})
            d3.select("#tooltip").remove()
    .attr("height", function(d) { return height - y(0); })
    .attr("y", function(d) { return y(0); })

// Animation
svg.selectAll("rect")
  .transition()
  .duration(400)
  .attr("y", function(d) { return y(d.Temperatures); })
  .attr("height", function(d) { return height - y(d.Temperatures); })
  .delay(function(d,i){console.log(i) ; return(i*120)})

})
