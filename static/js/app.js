var tbody = d3.select("tbody");

function populate_table()
{
    d3.csv("/final_dataset.csv", function(data) {
        data.forEach(function(row) {
            tbody.append("tr").attr("class", "data_row");
            Object.entries(row).forEach(function(datum) {
                 tbody.append("td").text(datum[1]);
            });
            // // Append new row to table so we can enter the next UFO sighting data
            // tbody.append("tr").attr("class", "data_row");

            // // Loop through each datum for sighting and call function
            // Object.entries(ufoData).forEach(function([key, value]) {
            //         // For each datum append a new cell to the table and fill the cell with datum
            //         tbody.append("td").text(value);
            // });
        });
    });
}

// When webpage is first loaded, populate the table 
populate_table();