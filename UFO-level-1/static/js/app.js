// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildtable(xdata){
    tbody.html("");

    xdata.forEach(record => {
        var row =  tbody.append("tr");
        
        Object.entries(record).forEach(([key,value]) => { 
            var cell = row.append("td");
            cell.text(value);
        })
    })

}

function filtertable(){
    var filtered = tableData;
    var userinput = d3.select("#datetime").property("value");
    filtered = tableData.filter(info => info.datetime === userinput);
    buildtable(filtered);

}

var button = d3.select("#filter-btn");
button.on("click",filtertable);

