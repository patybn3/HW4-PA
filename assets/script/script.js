/**
 * 
 * @assigment Homework 3 GUI 1 - UML
 * Professor: Wenjin Zhou, UMass Lowell Computer Science, wenjin_zhou@uml.edu - Summer 1 2024
 * @file script.js
 * @description This script takes input from a form in index.html, multiply the range of multiplicands by the range of multipliers,
 * and put it on a table from table.html
 * @version
 * @date 2024-06-01
 * @author Patricia Antlitz
 * 
 * Note: some styling present
 * 
 * Vanilla JavaScript
 * 
 * @specs The entries of the form are in a range. A range of Multiplicands and then a range of multipliers. For the table to behave as expected, the user must enter
 * the numbers in ascending order. For example =  multiplicands row: Multiplicand From: 5, Multiplicand To: 10, the same for the multiplier row. Entering the numbers in 
 * descending order will impact the calculation. For that, we have a if statement in the code that checks if the number is smaller, and swap the numbers to the
 * desired order.
 * 
 * Range: -50 - 50
 * 
 * Button 'Submit' generated the table as long as all values are entered and they are withing the required range
 * Button 'Reset' will go back to the initial screen to enter the values again and generate a new table
 * 
 * Copyright (c) 2024 by Patricia Antlitz
 * 
 */

// the form
$(document).ready(function() {
    $("#form").validate({
        errorClass: "errorMessage",
        errorElement: "div",
        rules: {
            multiplicandFrom: {
                required: true,
                min: -50,
                max: 50
            },
            multiplicandTo: {
                required: true,
                min: -50,
                max: 50
            },
            multiplierFrom: {
                required: true,
                min: -50,
                max: 50
            },
            multiplierTo: {
                required: true,
                min: -50,
                max: 50
            }
        },
        messages: {
            multiplicandFrom: {
                min: "Number must be at least -50.",
                max: "Number must be the most 50."
            },
            multiplicandTo: {
                min: "Number must be at least -50.",
                max: "Number must be the most 50."
            },
            multiplierFrom: {
                min: "Number must be at least -50.",
                max: "Number must be the most 50."
            },
            multiplierTo: {
                min: "Number must be at least -50.",
                max: "Number must be the most 50."
            }
        },
        submitHandler: function(form, event) {
            handleSubmit(event);
        }
    });
});

// function that gets the values entered by the user using the form
function handleSubmit(event) {

    event.preventDefault();

    let multiplicandFrom = parseInt($("#multiplicandFrom").val());
    let multiplicandTo = parseInt($("#multiplicandTo").val());
    let multiplierFrom = parseInt($("#multiplierFrom").val());
    let multiplierTo = parseInt($("#multiplierTo").val());

    if (multiplicandFrom > multiplicandTo) {
        [multiplicandFrom, multiplicandTo] = [multiplicandTo, multiplicandFrom];
    }

    if (multiplierFrom > multiplierTo) {
        [multiplierFrom, multiplierTo] = [multiplierTo, multiplierFrom];
    }

    // store the values
    // jQuery uses the same code because localStorafe is a web API
    localStorage.setItem("multiplicandFrom", multiplicandFrom);
    localStorage.setItem("multiplicandTo", multiplicandTo);
    localStorage.setItem("multiplierFrom", multiplierFrom);
    localStorage.setItem("multiplierTo", multiplierTo);

    // Fetch table and display content:
    $.ajax({
        url: "table.html?cache=" + new Date().getTime(),
        method: "GET",
        dataType: "html",
        success: function(data) {
            $("#content").html(data);
            $("#formContainer").hide();
            generateTable();
        },
        error: function(xhr, status, error) {
            console.error("Error fetching table.html: ", error);
        }
    })
}

function generateTable() {
    // get inputs from local storage:
    const multiplicandFrom = parseInt(localStorage.getItem("multiplicandFrom"));
    const multiplicandTo = parseInt(localStorage.getItem("multiplicandTo"));
    const multiplierFrom = parseInt(localStorage.getItem("multiplierFrom"));
    const multiplierTo = parseInt(localStorage.getItem("multiplierTo"));

    // create the table 
    const table = $("<table></table>");
    table.addClass("table", "table-bordered");
    const thead = $("<thead></thead>").appendTo(table);
    const headerRow = $("<tr></tr>").appendTo(thead);
    const headerCell = $("<th></th>").appendTo(headerRow);
    
    const img = $("<img>").attr("src", "media/tableX.png").attr("id", "tableImage").appendTo(headerCell);

    // to insert numbers
    for (let i = multiplicandFrom; i <= multiplicandTo; i++) {
        const cell = $("<th></th>").appendTo(headerRow);
        cell.text(i);
    }

    const tbody = $("<tbody></tbody>").appendTo(table);

    for (let i = multiplierFrom; i <= multiplierTo; i++) {
        const row = $("<tr></tr>").appendTo(tbody);
        const cell = $("<td></td>").appendTo(row);
        cell.text(i);

        // multi
        for (let j = multiplicandFrom; j <= multiplicandTo; j++) {
            const cell = $("<td></td>").appendTo(row);
            cell.text(i * j);
        }
    }

    $("#tableContent").append(table);
}

// reset button
function resetTable() {
    localStorage.clear();
    window.location.href = "index.html";
}
// end
