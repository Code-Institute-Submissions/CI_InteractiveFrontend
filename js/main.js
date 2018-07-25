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
  
  var q = queue().defer(d3.json, "data/cat_breeds.json");
  q.await(dataSet);
  
  var data;
  var ndx;
  var all;
  
  function dataSet(error, d) {
    data = d;
    makeGraphs(error, d);
  }
  
  function makeGraphs(error, cat_breeds) {
    ndx = crossfilter(cat_breeds);
  
    show_barchart(ndx);
    show_datatable(ndx);
    show_piechart1(ndx);
    show_piechart2(ndx);
    show_piechart3(ndx);
  
    dc.renderAll();
  }
  
  /*
  
    Charts Name & Target
  
  */
  var barChart = dc.barChart("#barchart");
  var dataTable = dc.dataTable("#datatable");
  var pieChart1 = dc.pieChart("#piechart1");
  var pieChart2 = dc.pieChart("#piechart2");
  var pieChart3 = dc.pieChart("#piechart3");
  
  /*
   
    End Charts Name
  */
  
  /*
   
  Charts Details
   
  */
  
  function show_barchart(ndx) {
    var dim = ndx.dimension(function(d) {
      return d["coat"];
    });
  
    var group = dim.group();
    barChart
      .width(500)
      .height(300)
      .dimension(dim)
      .group(group)
      .margins({ top: 10, right: 40, bottom: 100, left: 20 })
      .xUnits(dc.units.ordinal)
      .x(
        d3.scaleBand().domain(
          data.map(function(d) {
            return d["coat"];
          })
        )
      )
      .renderHorizontalGridLines(true)
      .renderLabel(false)
      .title(function(d) {
        return d.key;
      })
      .transitionDuration(1500)
      .colors(
        d3.scaleOrdinal(["#3182bd"])
      );
  }
  
  function show_datatable(ndx) {
    var dim = ndx.dimension(function(d) {
      return d["breed"];
    });
  
    dataTable
      .width(600)
      .height(300)
      .dimension(dim)
      .showGroups(false)
      .size(96)
      .group(function(d) {
        return d["breed"];
      })
      .columns([
        {
          label: "Cat breed",
          format: function(d) {
            return d["breed"];
          }
        },
        {
          label: "Origin",
          format: function(d) {
            return d["origin"];
          }
        },
        {
          label: "Country",
          format: function(d) {
            return d["country"];
          }
        },
        {
          label: "Did you know?",
          format: function(d) {
            return (
              d["fun_fact"] +
              '<div class="py-4"><button class="btn btn-light btn-sm my-4"><a href target="_blank" src="https://en.wikipedia.org/wiki/' +
              d["breed"] +
              '"> Learn more</a> </button></div>'
            );
          }
        },
        {
          label: "Image",
          format: function(d) {
            return '<img width="150" height="150" src="' + d["image"] + '">';
          }
        }
      ])
      .sortBy(function(d) {
        return d["breed"];
      })
      .order(d3.ascending);
  

  }
  
  function show_piechart1(ndx) {
    var dim = ndx.dimension(function(d) {
      return d["pattern"];
    });
  
    var group = dim.group();
  
    pieChart1
      .width(300)
      .height(300)
      .radius(150)
      .renderLabel(true)
      .colors(
        d3.scaleOrdinal(["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#dadaeb"])
      )
      .title(function(d) {
        return "Pattern: " + d.key;
      })
      .transitionDuration(1500)
      .dimension(dim)
      .group(group)
      .legend(
        dc
          .legend()
          .x(550)
          .y(5)
          .itemHeight(12)
          .gap(5)
      );
  }
  
  function show_piechart2(ndx) {
    var dim = ndx.dimension(function(d) {
      return d["country"];
    });
  
    var group = dim.group().reduceCount(function(d) {
      return d.value;
    });
  
    pieChart2
      .width(300)
      .height(300)
      .radius(150)
      .renderLabel(true)
      .colors(
        d3.scaleOrdinal(["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#dadaeb"])
      )
      .title(function(d) {
        return d.key;
      })
      .transitionDuration(1500)
      .dimension(dim)
      .group(group)
      .legend(
        dc
          .legend()
          .x(550)
          .y(5)
          .itemHeight(12)
          .gap(5)
      );
  }
  
  function show_piechart3(ndx) {
    var dim = ndx.dimension(function(d) {
      return d["origin"];
    });
  
    var group = dim.group().reduceCount(function(d) {
      return d.value;
    });
  
    pieChart3
      .width(300)
      .height(300)
      .radius(150)
      .renderLabel(true)
      .colors(
        d3.scaleOrdinal(["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#dadaeb"])
      )
      .title(function(d) {
        return "Origin: " + d.key;
      })
      .transitionDuration(1500)
      .dimension(dim)
      .group(group)
      .legend(
        dc
          .legend()
          .x(550)
          .y(5)
          .itemHeight(12)
          .gap(5)
      );
  }
  
  /*
   
    End Charts Details
   
    */
  
 
  