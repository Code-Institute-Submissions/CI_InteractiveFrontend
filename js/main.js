var q = queue().defer(d3.csv, "data/combine.csv");
q.await(makeGraphs);

function print_filter(filter) {
  var f = eval(filter);
  if (typeof f.length != "undefined") {
  } else {
  }
  if (typeof f.top != "undefined") {
    f = f.top(Infinity);
  } else {
  }
  if (typeof f.dimension != "undefined") {
    f = f
      .dimension(function(d) {
        return "";
      })
      .top(Infinity);
  } else {
  }
  console.log(
    filter +
      "(" +
      f.length +
      ") = " +
      JSON.stringify(f)
        .replace("[", "[\n\t")
        .replace(/}\,/g, "},\n\t")
        .replace("]", "\n]")
  );
}

function makeGraphs(error, data) {
  data.forEach(function(d) {
    d.Happiness_Rank = parseInt(d["Happiness_Rank"]);
    d.Happiness_Score = +d["Happiness_Score"];
    var tempDate = new Date(d.Year).getFullYear();
    d.Year = tempDate;
    d.Life_Exp = +d["Life_Exp"];
    d.Family = +d["Family"];
    d.GDP = +d["GDP"];
    d.Freedom = +d["Freedom"];
    d.Trust_Gov = +d["Trust_Gov"];
    d.Generosity = +d["Generosity"];
  });

  var ndx = crossfilter(data);
  var all = ndx.groupAll();


  dc.renderAll();
}



            