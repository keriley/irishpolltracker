//FUNCTION TO DRAW CHART WITH DATA EXTRACTED FROM GOOGLE SHEET
function drawChart(data) {
  
  //defines basic svg attributes
  var svg = d3.select("#tracking-chart"),
      margin = {top: 20, right: 50, bottom: 30, left: 50},
      width = svg.attr("width") - margin.left - margin.right,
      height = svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  //parses date from abbreviated month and year format
  var parseTime = d3.timeParse("%b %Y");
  
  //defines x and y scales
  var x = d3.scaleTime().range([0, width]),
      y = d3.scaleLinear().range([height, 0]);

  //draws line showing each party's support over time
  var line = d3.line()
      .x(function(d) { return x(parseTime(d.date)); })
      .y(function(d) { return y(d.support); });

  //defines variable to hold parties and associated colours
  var partyNames = [
      {name:'fine_gael', color: '#3c7cd9'},
      {name: 'fianna_fail', color: '#4eb271'},
      {name: 'labour', color: '#f3514e'},
      {name: 'sinn_fein', color: '#297635'},
      {name: 'green_party', color: '#61e347'},
      {name: 'other_independents', color: '#dd92f3'}
  ]

  //defines empty array to be filled with cleaned data
  var formattedData = []

  //defines empty array to be filled with six party objects containing cleaned data
  var dataByParty = []

  //takes each party and maps to support values over time
  partyNames.forEach(function(party){
    var ratedOverTime = data.map(function(poll){
      if (poll[party.name]) {
        return {
          date: poll.date,
          support: poll[party.name],
        }
      }
    })
    //filters out future date objects
    ratedOverTime = ratedOverTime.filter(function(poll){
      return poll != undefined
    })
    dataByParty.push({
      party: party.name,
      values: ratedOverTime,
      color: party.color,
    })
  });

  //defines x and y domains
  x.domain([d3.min(dataByParty[0].values, function(d) { return parseTime(d.date); }), parseTime('Dec 2019')]);
  y.domain([0, 50]);

  //draws x-axis
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(12));
  
  //draws y-axis
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
  
  //creates new variable an binds it  to cleaned party data
  var party = g.selectAll(".party-group")
      .data(dataByParty)
      .enter().append("g")
      .attr("class", "party-group");

  //binds new party variable with cleaned data to line
  party.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d.values); })
      .attr('stroke', function(d) {return d.color});
  
  //formats and labels lines
  party.append('text')
      .attr('class', 'current-support')
      .attr('dx', 5)
      .attr('dy', 5)
      .attr('x', function(d) {return x(parseTime(d.values[d.values.length-1].date))})
      .attr('y', function(d) {return y(d.values[d.values.length-1].support)})
      .text(function(d) {return Math.round(d.values[d.values.length-1].support) + "%"});

}

//EXTRACTING DATA FROM GOOGLE SHEET
//defines variable for location of google spreadsheet containg data (adjusted monthly averages of support for each party)
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Cl5L-QdjRqmbPx5ajhwFkcl0PYM6eVl8Jf-1fvLmo0I/edit?usp=sharing';

//uses tabletop.js to extract the google sheet's data as json objects
function renderSpreadsheetData() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: draw,
                     simpleSheet: true } )
}

//passes tabletop data to drawChart function
function draw(data, tabletop) {
  drawChart(data);
}

//READY, SET, GO!
renderSpreadsheetData();
