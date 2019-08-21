
const dataset = [1, 2, 3, 4, 5];

d3.select("body")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p") // appends paragraph
//   .text("D3 is awesome!!"); // prints this for each data in data set
  .text(function(d){return d;}); // prints out each piece of data
