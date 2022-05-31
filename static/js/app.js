// import table data from data.js

const tableData = data;


// reference the HTML table using d3

var tbody = d3.select("tbody");


// Original function

function addition(a, b) {
    return a + b;
}

// Same function converted to an arrow function

addition = (a, b) => a + b;

// Original double addition function

function doubleAddition(a, b) {
    var total = addition(c, d) * 2;
    return total;
}

// doubleAddtion refactored into an arrow function

doubleAddition = (c, d) => addition(c, d) *2;

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

