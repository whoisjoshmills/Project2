// Create a map object
console.log("Hello");

var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var dataStr = JSON.stringify("data.js")
    console.log(data);

// var data = JSON.parse(dataStr);

// Crash data
// var data = dataStr;

 var mark = L.marker(
  L.latLng(
    parseFloat(data["latitude"]),
    parseFloat(data["long"])
  )
);


// Loop through the crashes array and create one marker for each crash
for (var i = 0; i < dataStr.length; i++) {

  // Conditionals for crash points
  var color = "";
  if (dataStr[i].fatalities >= 100) {
    color = "indigo";
  }
  else if (dataStr[i].fatalities <= 99 && dataStr[i].fatalities >= 50) {
    color = "orangered";
  }
  else if (dataStr[i].fatalities <= 49 && dataStr[i].fatalities >= 10) {
    color = "palegreen";
  }
  else {
    color = "gold";
  }


  // Add circles to map
  L.circleMarker(dataStr[i].mark, {
    fillOpacity: 0.75,
    color: color,
    fillColor: color,
    // Adjust radius
    radius: dataStr[i].fatalities 
  }).bindPopup("<h1>" + dataStr[i].location + "</h1> <hr> <h3>Fatalities: " + dataStr[i].fatalities + "</h3>").addTo(myMap);
}
