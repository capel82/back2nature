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


var map, places, infoWindow;
      var markers = [];
      var autocomplete;
      var countryRestrict = {'country': 'mys'};
      var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
      var hostnameRegexp = new RegExp('^https?://.+?/');

      var countries = {
        'mys': {
          center: {lat:4.210484 , lng:101.97576600000002},
          zoom: 8
        },
       
      };

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: countries['mys'].zoom,
          center: countries['mys'].center,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          streetViewControl: false
        });

        infoWindow = new google.maps.InfoWindow({
          content: document.getElementById('info-content')
        });

        // Create the autocomplete object and associate it with the UI input control.
        // Restrict the search to the default country, and to place type "cities".
        /*autocomplete = new google.maps.places.Autocomplete(
             @type {!HTMLInputElement}  (
                document.getElementById('autocomplete')), {
              types: ['(cities)'],
              componentRestrictions: countryRestrict
            });
            */
        places = new google.maps.places.PlacesService(map);
        search();

       // autocomplete.addListener('place_changed', onPlaceChanged);

        // Add a DOM event listener to react when the user selects a country.
        /*document.getElementById('country').addEventListener(
            'change', setAutocompleteCountry);*/
      }

      // When the user selects a city, get the place details for the city and
      // zoom the map in on the city.
     /* function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(11);
          search();
        } else {
          document.getElementById('autocomplete').placeholder = 'Enter a city';
        }
      }*/

      // Search for hotels in the selected city, within the viewport of the map.
      function search() {
        var search = {
          bounds: map.getBounds(),
          types: ['lodging']
        };

        places.nearbySearch(search, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            // Create a marker for each hotel found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
              var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
              var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
                position: results[i].geometry.location,
                animation: google.maps.Animation.DROP,
                icon: markerIcon
              });
              // If the user clicks a hotel marker, show the details of that hotel
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
        });
      }

      function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          if (markers[i]) {
            markers[i].setMap(null);
          }
        }
        markers = [];
      }

      // Set the country restriction based on user input.
      // Also center and zoom the map on the given country.
      function setAutocompleteCountry() {
        var country = document.getElementById('country').value;
        if (country == 'all') {
          autocomplete.setComponentRestrictions({'country': []});
          map.setCenter({lat: 15, lng: 0});
          map.setZoom(2);
        } else {
          autocomplete.setComponentRestrictions({'country': country});
          map.setCenter(countries[country].center);
          map.setZoom(countries[country].zoom);
        }
        clearResults();
        clearMarkers();
      }

      function dropMarker(i) {
        return function() {
          markers[i].setMap(map);
        };
      }

      function addResult(result, i) {
        var results = document.getElementById('results');
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';

        var tr = document.createElement('tr');
        tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
        tr.onclick = function() {
          google.maps.event.trigger(markers[i], 'click');
        };

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = markerIcon;
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.name);
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        results.appendChild(tr);
      }

      function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }

      // Get the place details for a hotel. Show the information in an info window,
      // anchored on the marker for the hotel that the user selected.
      function showInfoWindow() {
        var marker = this;
        places.getDetails({placeId: marker.placeResult.place_id},
            function(place, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
              }
              infoWindow.open(map, marker);
              buildIWContent(place);
            });
      }

      // Load the place information into the HTML elements used by the info window.
      function buildIWContent(place) {
        document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
            'src="' + place.icon + '"/>';
        document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
            '">' + place.name + '</a></b>';
        document.getElementById('iw-address').textContent = place.vicinity;

        if (place.formatted_phone_number) {
          document.getElementById('iw-phone-row').style.display = '';
          document.getElementById('iw-phone').textContent =
              place.formatted_phone_number;
        } else {
          document.getElementById('iw-phone-row').style.display = 'none';
        }

        // Assign a five-star rating to the hotel, using a black star ('&#10029;')
        // to indicate the rating the hotel has earned, and a white star ('&#10025;')
        // for the rating points not achieved.
        if (place.rating) {
          var ratingHtml = '';
          for (var i = 0; i < 5; i++) {
            if (place.rating < (i + 0.5)) {
              ratingHtml += '&#10025;';
            } else {
              ratingHtml += '&#10029;';
            }
          document.getElementById('iw-rating-row').style.display = '';
          document.getElementById('iw-rating').innerHTML = ratingHtml;
          }
        } else {
          document.getElementById('iw-rating-row').style.display = 'none';
        }

        // The regexp isolates the first part of the URL (domain plus subdomain)
        // to give a short URL for displaying in the info window.
        if (place.website) {
          var fullUrl = place.website;
          var website = hostnameRegexp.exec(place.website);
          if (website === null) {
            website = 'http://' + place.website + '/';
            fullUrl = website;
          }
          document.getElementById('iw-website-row').style.display = '';
          document.getElementById('iw-website').textContent = website;
        } else {
          document.getElementById('iw-website-row').style.display = 'none';
        }
      }
//TEMPERATURE GRAPH
// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 60, left: 50},
    width = 280 - margin.left - margin.right,
    height = 290 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr(
    'viewBox',
    '0 0 ' +
      (width + margin.left + margin.right) +
      ' ' +
      (height + margin.top + margin.bottom)
  )
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
      .text(" Average Temperatures (ºC)");      

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
    .attr("y", function(d) { return y(0); 
      
    })

// Animation
svg.selectAll("rect")
  .transition()
  .duration(400)
  .attr("y", function(d) { return y(d.Temperatures); })
  .attr("height", function(d) { return height - y(d.Temperatures); })
  .delay(function(d,i){console.log(i) ; return(i*120)})

})

