// Step 1: Set up our chart
//= ================================
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Step 3:
// Import data from the crash.csv file
// =================================
d3.csv("../data/Plane_crash.csv").then(function(crashData) {
    console.log(crashData);
    console.log([crashData]);

  // Step 4: Parse the data
  // Format the data and convert to numerical and date values
  // =================================
  // Create a function to parse date and time
  var parseTime = d3.timeParse("%m/%d/%Y");

  // bend by year
  //var generators = d3.bin()
  //.domain([1912,2009])    // Set the domain to cover the entire intervall [0,1]
//   .thresholds(97);  // number of thresholds; this will create 19+1 bins

//     var bins = generators(parseTime);

// var plane = new Array();
//   // Format the data.Prep for use
//   crashData.forEach(function(data) {
//     //data.Date = +data.Date;
//     plane.Fatalities = +data.Fatalities;
//     plane.Aboard = +data.Aboard;
//   });


  // Step 5: Create Scales
  //= ============================================
  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(crashData, d => d.Date))
    .range([0, width]);
console.log (xTimeScale);

  var yLinearScale1 = d3.scaleLinear()
    .domain([0, d3.max(crashData, d => d.Fatalities)])
    .range([height, 0]);

  var yLinearScale2 = d3.scaleLinear()
    .domain([0, d3.max(crashData, d => d.Aboard)])
    .range([height, 0]);

  // Step 6: Create Axes
  // =============================================
  var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%m/%d/%Y"));
  var leftAxis = d3.axisLeft(yLinearScale1);
  var rightAxis = d3.axisRight(yLinearScale2);


  // Step 7: Append the axes to the chartGroup
  // ==============================================
  // Add bottomAxis
  chartGroup.append("g").attr("transform", `translate(0, ${height})`).call(bottomAxis);

  // Add leftAxis to the left side of the display
  chartGroup.append("g").call(leftAxis);

  // Add rightAxis to the right side of the display
  chartGroup.append("g").attr("transform", `translate(${width}, 0)`).call(rightAxis);


  // Step 8: Set up two line generators and append two SVG paths
  // ==============================================
  // Line generators for each line
  var line1 = d3
    .line()
    .x(d => xTimeScale(d.Date))
    .y(d => yLinearScale1(d.Fatalities));

  var line2 = d3
    .line()
    .x(d => xTimeScale(d.Date))
    .y(d => yLinearScale2(d.Aboard));


  // Append a path for line1
  chartGroup.append("path")
    .data([crashData])
    .attr("d", line1)
    .classed("line green", true);

  // Append a path for line2
  chartGroup.append("path")
    .data([crashData])
    .attr("d", line2)
    .classed("line orange", true);

    // Append axes titles
  chartGroup.append("text")
  .attr("transform", `translate(${width / 2}, ${height + margin.top + 20})`)
    .classed("fatalities-text text", true)
    .text("Crash Fatalities");

  chartGroup.append("text")
  .attr("transform", `translate(${width / 2}, ${height + margin.top + 37})`)
    .classed("survivor-text text", true)
    .text("Passengers Aboard");

}).catch(function(error) {
  console.log(error);
});
