
  d3
  .json('/api/sql_data')
  .then(data=>{
    console.log(data);
  })

// // Assign the data from `data.js` to a  variable
// var sightings = data;
// console.log(sightings)

// // Select the button
// var button = d3.select("#filter-btn");

// // Select the form
// var form = d3.select("#form");

// var tbody = d3.select("tbody");

// button.on("click", runEnter);
// form.on("submit",runEnter);

// var sightings_full = sightings

// console.log(sightings_full);

// sightings.forEach((data) => {
 
//  var row = tbody.append("tr");
 
//  Object.entries(data).forEach(function([key, value]) {
   
//    var cell = row.append("td");
   
//    cell.text(value);
//  })
// })

// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);

//   // Build table
  
//   // Clear out table
//   tbody.html("");

//   // Filter 
  
//   var filteredData = sightings.filter(date => date.datetime === inputValue);

//   console.log(filteredData);

//   filteredData.forEach((data) => {
    
//     var row = tbody.append("tr");
    
//     Object.entries(data).forEach(function([key, value]) {
      
//       var cell = row.append("td");
      
//       cell.text(value);
//     })
//   })
// }
//   })
//   .catch(err => console.log(err));