// // alert('connected');
// // dataset
// const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

// // defines height and width and padding of SVG container
// let svgWidth = 500,
//   svgHeight = 300,
//   barPadding = 5;
// //   bar width of svg dataset container svg Width divided by the total length of our dataset
// const barWidth = (svgWidth/dataset.length);
// console.log(barWidth);

// // svg container with attributes width and height
// const svg = d3
//   .select("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);

// // barchart for svg
// var barChart = svg.selectAll("rect")
//   //   call data method to call the dataset
//   .data(dataset)
//   //   enter method called performs further operations
//   .enter()
//   //   append rect for each item
//   .append("rect")
//   .attr("y", function(d) {
//     return svgHeight - d
//   })
//   .attr("height", function(d) {
//     return d;
//   })
//   .attr("width", barWidth - barPadding)
//   .attr("tranform", function (d, i) {
//     var translate = [barWidth * i, 0];
//     return "translate("+ translate +")";
//   });

const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

const svgWidth = 500,
  svgHeight = 300,
  barPadding = 5;
const barWidth = svgWidth / dataset.length;

const svg = d3
  .select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

const barChart = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", d => {
    return svgHeight - d;
  })
  .attr("height", d => {
    return d;
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", (d, i) => {
    var translate = [barWidth * i, 0];
    return "translate(" + translate + ")";
  });
