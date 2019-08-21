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
