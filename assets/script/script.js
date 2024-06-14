/**
 * 
 * @assigment Homework 4 GUI 1 - UML
 * Professor: Wenjin Zhou, UMass Lowell Computer Science, wenjin_zhou@uml.edu - Summer 1 2024
 * @file script.js
 * @description This script takes input from a form in index.html, multiply the range of multiplicands by the range of multipliers,
 * dinamically generate a table with the values given, and create tabs for each table generated
 * @version
 * @date start 2024-06-09 - end 2024-06-13
 * @author Patricia Antlitz
 * @version 2.4.26
 *
 * Note: some styling present
 * 
 * jQuery JavaScript
 * jQuery UI
 * 
 * @specs The entries of the form are in a range. A range of Multiplicands and then a range of multipliers. For the table to behave as expected, the user must enter
 * the numbers in ascending order. For example =  multiplicands row: Multiplicand From: 5, Multiplicand To: 10, the same for the multiplier row. Entering the numbers in 
 * descending order will impact the calculation. For that, we have a if statement in the code that checks if the number is smaller, and swap the numbers to the
 * desired order.
 * 
 * Range: -50 to 50
 * 
 * Button 'Submit' generated the table as long as all values are entered and they are withing the required range
 * Button 'Reset' will go back to the initial screen to enter the values again and generate a new table
 * 
 * Copyright (c) 2024 by Patricia Antlitz
 * 
 */

// GLOBAL
let tabCounter = 2; // start tab counter for dynamic tabs

// the form
$(document).ready(function () {

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
        submitHandler: function (form, event) {
            handleSubmit(event);
            // reset button showing or not
            toggleButton();
        }
    });

    // call function that handles sliders
    sliderScroll();

    // initialize tabs
    $("#tabs").tabs();

    // reset tables and form
    $("#resetButton").click(function () {
        $("#tableContent").empty();
        $("#tabs ul").empty();
        $("#tabs .ui-tabs-panel").remove();
        $("#form")[0].reset();
        $("#multiplicandFromSlider").slider("value", 0);
        $("#multiplicandToSlider").slider("value", 0);
        $("#multiplierFromSlider").slider("value", 0);
        $("#multiplierToSlider").slider("value", 0);
        //$("#tabs").tabs("refresh");
        tabCount = 2;
        $("#tabsBox").hide();
        toggleButton();
    });

    // remove individual tabs with close icon:
    $("#tabs").delegate("span.ui-icon-close", "click", function () {
        let panelId = $(this).closest("li").remove().attr("aria-controls");
        $("#" + panelId).remove();
        $("#tabs").tabs("refresh");
        toggleButton();
    });

});

// show, hide reset button
function toggleButton() {
    // show reset button only if table is generated
    if ($("#tabs ul").children().length > 0) {
        $("#resetButton").show();
        $("#tableBox").show();
    }
    else {
        $("#resetButton").hide();
        $("#tableBox").hide();
    }
}

function sliderScroll() {
    // jQuery UI slider
    $("#multiplicandFromSlider").slider({
        min: -50,
        max: 50,
        slide: function (event, ui) {
            $("#multiplicandFrom").val(ui.value);
        }
    });

    $("#multiplicandToSlider").slider({
        min: -50,
        max: 50,
        slide: function (event, ui) {
            $("#multiplicandTo").val(ui.value);
        }
    });

    $("#multiplierFromSlider").slider({
        min: -50,
        max: 50,
        slide: function (event, ui) {
            $("#multiplierFrom").val(ui.value);
        }
    });

    $("#multiplierToSlider").slider({
        min: -50,
        max: 50,
        slide: function (event, ui) {
            $("#multiplierTo").val(ui.value);
        }
    });

    // update sliders
    $("#multiplicandFrom, #multiplierFrom, #multiplicandTo, #multiplierTo").on("input", function () {
        const sliderId = `#${$(this).attr("id")}Slider`;
        $(sliderId).slider("value", $(this).val());
    });

    $("#form").submit(toggleButton());
}


// function that gets the values entered by the user using the form
function handleSubmit(event) {
    if (event) event.preventDefault();

    let multiplicandFrom = parseInt($("#multiplicandFrom").val());
    let multiplicandTo = parseInt($("#multiplicandTo").val());
    let multiplierFrom = parseInt($("#multiplierFrom").val());
    let multiplierTo = parseInt($("#multiplierTo").val());

    // swap orders if negative
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

    addTab(multiplicandFrom, multiplicandTo, multiplierFrom, multiplierTo);
}

function addTab(multiplicandFrom, multiplicandTo, multiplierFrom, multiplierTo) {
    // Get tab template and prepare new tab ID
    let tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";
    let label = `(${multiplicandFrom} x ${multiplicandTo}) by (${multiplierFrom} x ${multiplierTo})`;
    let id = `tabs-${tabCounter}`;

    // Add new tab header
    let li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));
    $("#tabs ul").append(li);

    // Add new tab content with generated table
    let tabContent = `<div id='${id}'><div id='table${tabCounter}'></div></div>`;
    $("#tabs").append(tabContent);

    // Generate table and add to the new tab
    generateTable(`#table${tabCounter}`);

    // Refresh tabs to show the new one
    $("#tabs").tabs("refresh");

    // Increment tab counter for next tab
    tabCounter++;

    // activate tab immediately
    $("#tabs").tabs("option", "active", -1);
}

function generateTable(tableSelector) {
    // get inputs from local storage:
    const multiplicandFrom = parseInt(localStorage.getItem("multiplicandFrom"));
    const multiplicandTo = parseInt(localStorage.getItem("multiplicandTo"));
    const multiplierFrom = parseInt(localStorage.getItem("multiplierFrom"));
    const multiplierTo = parseInt(localStorage.getItem("multiplierTo"));

    // create the table 
    const table = $("<table></table>").addClass("table", "table-bordered");
    const thead = $("<thead></thead>").appendTo(table);
    // class vertical will add vertical lines to the table
    const headerRow = $("<tr></tr>").appendTo(thead).addClass("vertical");
    const headerCell = $("<th></th>").appendTo(headerRow).addClass("vertical");

    const img = $("<img>").attr("src", "media/tableX.png").attr("id", "tableImage").appendTo(headerCell);

    // to insert numbers
    for (let i = multiplicandFrom; i <= multiplicandTo; i++) {
        const cell = $("<th></th>").appendTo(headerRow).addClass("vertical");
        cell.text(i);
    }

    const tbody = $("<tbody></tbody>").appendTo(table);

    for (let i = multiplierFrom; i <= multiplierTo; i++) {
        const row = $("<tr></tr>").appendTo(tbody).addClass("vertical");
        const cell = $("<td></td>").appendTo(row).addClass("vertical");
        cell.text(i);

        // multi
        for (let j = multiplicandFrom; j <= multiplicandTo; j++) {
            const cell = $("<td></td>").appendTo(row).addClass("vertical");
            cell.text(i * j);
        }
    }

    $(tableSelector).append(table);
}
// end
