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

function handleClick() {
    let date = d3.select("#datatime").property("value");
// need to set a default filter and save it to a new variable so we have a blank slate to start
    let filteredData = tableData;

    // check to see if a date was entered and filter the data using that date.
    if (date) {
        // apply filter to the table data to only keep the rows where 'datetime' matches the filter
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild the table using the filtered data by passing that variable to the buildTable function
    // if no data was entered, nothing would be filtered a'filteredData' will be the same as the original tableData
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build a table when the page loads
buildTable(tableData);


// psuedocode practice
// if (date is entered) {
//     Filter the default data to show only the date entered
// };

