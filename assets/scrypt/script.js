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
    $("#form").submit(function(event)) {
        handleSubmit(event)
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('form').addEventListener('submit', function(event) {
//         // fucntion below
//         handleSubmit(event);
//     });
// });

// fucntion that gets the values entered by the user using the form
function handleSubmit(event) {

    event.preventDefault();

    let multiplicandFrom = parseInt($("#multiplicandFrom").val());
    let multiplicandTo = parseInt($("#multiplicandTo").val());
    let multiplierFrom = parseInt($("#multiplierFrom").val());
    let multiplierTo = parseInt($("#multiplierTo").val());

    // let multiplicandFrom = parseInt(document.getElementById("multiplicandFrom").value);
    // let multiplicandTo = parseInt(document.getElementById("multiplicandTo").value);
    // let multiplierFrom = parseInt(document.getElementById("multiplierFrom").value);
    // let multiplierTo = parseInt(document.getElementById("multiplierTo").value);

    // The range I selected is between -50 and 50 only - Table can handle any range, but I figure I should add this
    // in order to generate an error message
    if (multiplicandFrom < -50 || multiplicandFrom > 50 ||
        multiplicandTo < -50 || multiplicandTo > 50 ||
        multiplierFrom < -50 || multiplierFrom > 50 ||
        multiplierTo < -50 || multiplierTo > 50) {
        
        // error message function
        error("Please Enter Numbers Between -50 and 50 Only.");
        return;
    }

    // if one or more fields are empty
    if (isNaN(multiplicandFrom) || isNaN(multiplicandTo) ||
        isNaN(multiplierFrom) || isNaN(multiplierTo)) {
        
        // error message function
        error("Error. All fields must contain a number from -50 to 50.");
        return;
    }

    // hide the messaged if the inputs are valid:
    $('errorMessage').addClass('hidden');

    // document.getElementById('errorMessage').classList.add('hidden');

    /* here we wanna make sure the order of calculatiion goes in ascending order
       even if the user enters if in descending order.
    */
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
        url: "table.html",
        method: "GET",
        dataType: "html"
        sucess: function(data) {
            $("#content").html(data);
            $("#formContainer").hide();
            generateTable();
        },
        error: function(xhr, status, error) {
            console.error("Error fetching table.html: ", error);
        }
    })

    // fetch('table.html')
    // .then(response => response.text())
    // .then(data => {
    //     document.getElementById('content').innerHTML = data;
    //     document.getElementById('formContainer').style.display = 'none';
    //     generateTable();
    // });
}

function error(e) {
    // error message
    $("#errorMessage").text(e).removeClass(".hidden").fadeIn();
    // Instead of:
    // document.getElementById('errorMessage').innerText = e;
    // document.getElementById('errorMessage').classList.remove('hidden');
    // document.getElementById('errorMessage').style.display = 'block';

    // fade
    $("#errorMessage").delay(2000).fadeOut();
//     setTimeout(function () {
//         $("#errorMessage").css("trasition", "opacity 1s")
//         $("#errorMessage").css("opacity", "0");

//         // document.getElementById('errorMessage').style.transition = 'opacity 1s';
//         // document.getElementById('errorMessage').style.opacity = '0';

//         setTimeout(function() {
//             $("#erroMessage").css("display", "none");
//             $("#errorMessage").css("opacity", 1);
//             $("#errorMessage").addClass(".hidden");
//             // document.getElementById('errorMessage').style.display = 'none';
//             // document.getElementById('errorMessage').style.opacity = '1';
//             // document.getElementById('errorMessage').classList.add('hidden');
//         }, 1000);
//     }, 2000);
}

function generateTable() {
    // get inputs from local storage:
    const multiplicandFrom = parseInt(localStorage.getItem("multiplicandFrom"));
    const multiplicandTo = parseInt(localStorage.getItem("multiplicandTo"));
    const multiplierFrom = parseInt(localStorage.getItem("multiplierFrom"));
    const multiplierTo = parseInt(localStorage.getItem("multiplierTo"));

    // create the table 
    const table = $("<table></table>")addClass(".table table-bordered");
    // instead of:
    // const table = document.createElement("table");
    // table.classList.add("table", "table-bordered");

    const thead = $("<thead></thead>").appendTo(table);
    // instead of:
    // const thead = table.createTHead();
    const headerRow = $("<tr></tr>").appendTo(thead);
    // instead of:
    // const headerRow = thead.insertRow();
    const headerCell = $("<th></th>").appendTo(headerCell);
    // instead of:
    //const headerCell = headerRow.insertCell();
    // X imafe on table:
    
    const img = $("<img>").attr("src", "media/tableX.png").attr("id", "tableImage").appendTo(headerCell);
    // instead of:
    // const img = document.createElement("img");
    // img.src = "media/tableX.png";
    // img.id = "tableImage";
    // headerCell.appendChild(img);

    // to insert numbers
    for (let i = multiplicandFrom; i <= multiplicandTo; i++) {
        $("<th></th>").text(i).appendTo(headerRow);
        // instead of:
        // const cell = headerRow.insertCell();
        // cell.textContent = i;
    }

    const tbody = $("<tbody></tbody>").appendTo(table);
    // const tbody = table.createTBody();
    for (let i = multiplierFrom; i <= multiplierTo; i++) {
        const row = $("<tr></tr>").appendTo(tbody);
        // const row = tbody.insertRow();
        $("<td></td>").text(i).appendTo(row);
        // const cell = row.insertCell();
        // cell.textContent = i;

        // multi
        for (let j = multiplicandFrom; j <= multiplicandTo; j++) {
            $("<td></td>").text(i * j).appendTo(row);
            //  const cell = row.insertCell();
            // cell.textContent = i * j;
        }
    }

    $("#tableContent").empty().append(table);
    // document.getElementById("tableContent").innerHTML = "";
    // document.getElementById("tableContent").appendChild(table);
}

// reset button
function resetTable() {
    localStorage.clear();
    window.location.href = "index.html";
}
// end
