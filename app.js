<!DOCTYPE html>
<html>
  <head>
    <title>Pareto of Crashes per Year</title>
    <script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-core.min.js"></script>
    <script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-pareto.min.js"></script>
    <style>
      html, body, #container1 {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <script>

anychart.onDocumentReady(function () {

  // set data
  var data = [
    {x: , value: },
    {x: , value: },
    {x: , value: },
    {x: , value: },
    {x: , value: },
    {x: , value: },
    {x: , value: },
    {x: , value: },
    {x: , value:},
    {x: , value: }
  ];

  // create a pareto chart
  var chart = anychart.pareto();
  // feed the data into the chart
  chart.data(data);

  // set the chart title
  chart.title('Number of Plane Crashes per Year');
  // set the measure y axis title
  chart.yAxis(0).title('Number of Plane Crashes');
  // set the cumulative percentage y axis title
  chart.yAxis(1).title('Cumulative percentage');
  // set the color palet to the sea one
  chart.palette(anychart.palettes.sea);

  // Name the tooltip first part
  var column = chart.getSeriesAt(0);
  column.tooltip().format('Number of Plane Crashes: {%Value}');

  // name the tool tip second and third part
  var line = chart.getSeriesAt(1);
  line
    .tooltip()
    .format('Cumulative Frequency: {%CF}% \n Relative Frequency: {%RF}%');
   
    // Get the Crosshairs to come up 
   chart.crosshair().enabled(true).xLabel(false);
  // chart container id
  chart.container('container1');
  // draw the chart
  chart.draw();

});
    </script>
  </body>
</html>