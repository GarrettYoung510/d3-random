// javascript file
console.log("connected!");

// returns first element matching specified criteria
d3.select();
// selects all elements matching specified criteria
d3.selectAll();

//
d3.select("h1")
  .style("color", "red")
  .attr("class", "heading")
  .text("Updated h1 tag");

d3.select("body")
  .append("p")
  .text("First Paragraph");
d3.select("body")
  .append("p")
  .text("Second Paragraph");
d3.select("body")
  .append("p")
  .text("Third Paragraph");

d3.selectAll("p").style("color", "blue");
