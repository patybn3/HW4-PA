## Homework 4 - Graphical User Interface 1
### UML, Professor Zhou, Computer Science
### Student: Patricia Antlitz
### Date: 06/12/2024
### url: https://patybn3.github.io/HW4-PA/

## Assignment:

This is a continuationg of assignment number 3 that can be found at:
https://github.com/patybn3/HW_3_PA_GUI1

Refer to Homework 3 README above to learn more about version 1.-.- of this code.

In this assignment we must modify the current code to perform the following tasks:

Step 1:

  Implement jQuery, instead of Vanilla Javascript

Step 2:

  Change the form submition in order to use jQuery.validate();
  catch the errors using validate

Step 3:

  Use jQuery UI Slider to add sliders in addition to the input fields. You must be able to enter the numbers manually and by using the slider:

  "a. Add jQuery UI sliders for each of your text input fields. Manipulating a slider should change the value in the corresponding text input field dynamically. That is, moving the slider should instantly change the text input field value. Likewise, typing into the text input field should change the value indicated by the slider.
  Note: This is known as “two-way binding” between two form fields or two widgets, which is often accomplished using other JavaScript libraries such as AngularJS. But for this assignment, you are to implement the two-way binding yourself. In addition, your table should update dynamically when either the slider is changed or a new text value is entered." 

Step 4:

  Add tabs to hold the tables:

  b. The second major modification is to implement a jQuery UI tabbed interface. Each time you create a new table, display it in a new tab and label that tab with the four parameters used to create it. Thus, you should have a single tab in which you enter parameters, and individual tabs for each table that gets generated. Think about how you want to implement this on your page, as you may not want to have the tabs in the standard location or format.

Step 5:

  Provide a way to delete individual tabs and then provide a way to delete multiple tabs at the same time. This will take a little thinking to decide the best design for implementing this functionality. You might put the deletion controls on your data entry page, or you might put them on a separate “layout editing” page. There are many valid ways to do this. The ultimate design decision is up to you.
 
## File hierarchy

HW3/

-- assets/

--- css/

---- style file

--- script/

---- javeScript code

-- media/

--- all images

-- html riles

-- readme file


[x] W3C CSS Validation Service: http://jigsaw.w3.org/css-validator

[x] HTML5 Markup Validation Service: http://validator.w3.org -----> one <strong>ERROR</strong>:

The error below is not quite an error. This empty div is holding the space for the table under table.html:

```html
<div id="content">
  <!-- Content from the second HTML file will be loaded here -->
</div>
```
<img width="931" alt="Screenshot 2024-06-03 at 2 14 15 PM" src="https://github.com/patybn3/HW_3_PA_GUI1/assets/59259041/ce5324a8-590e-4b3b-925a-a5ab0e51fc76">


---

## Wireframe

<img width="1440" alt="Screenshot 2024-06-03 at 12 18 06 PM" src="https://github.com/patybn3/HW_3_PA_GUI1/assets/59259041/87c833e0-5757-4e0e-b14f-e41a446aff61">

<img width="1435" alt="Screenshot 2024-06-03 at 12 19 08 PM" src="https://github.com/patybn3/HW_3_PA_GUI1/assets/59259041/4333cf1c-897d-456f-b1d0-d18f1148bb93">


---

## Specs:

Suitable for all mobile and desktop devices

<img width="499" alt="Screenshot 2024-06-03 at 12 16 43 PM" src="https://github.com/patybn3/HW_3_PA_GUI1/assets/59259041/5ca530b9-f95c-4619-9b6b-29ffd6e78f14">

<img width="232" alt="Screenshot 2024-06-03 at 12 16 58 PM" src="https://github.com/patybn3/HW_3_PA_GUI1/assets/59259041/fa3e2bd9-3baf-4283-8b66-e8b4474d9898">

<img width="227" alt="Screenshot 2024-06-03 at 12 17 38 PM" src="https://github.com/patybn3/HW_3_PA_GUI1/assets/59259041/5e0a9d65-7b96-4217-a532-92886ace1029">

---

### Plan:

Create Logo, favicon, title image on canva

Style navbar - white w/ shadow

Style page

Add form

Add bottom

Add footer

Step 2:

Form fields accept numbers only

when submit, table appear, the table is not on the screen originally

the table needs to resize as it grows to always fit on the page

set a threshold of max/min numbers

error message for character and numbers above threshold

reset bottom to clear page

table on separate html

JS:

on click trigger calculation and show secondary html

multiply multiplicant x multiplier, from and to # given, incremented by 1:

Multiplier from: 5, to: 8

then its 5, 6, 7, 8 on the table

use bootstrap table

logic:

get table fields, increment while placing the numbers

### RUN

to run the source code, open the html file on your browser, or run the command `python3 -m http.server` on the terminal inside of the repository's folder

## Technologies Used:

- HTML5
- CSS 5
- JavaScript
- Bootstrap

### Issues:

- bug:
-- table generating when all fields are empty
- separate alert into a different function to reuse it
validate code

### Sources:

logo: 
https://www.canva.com

w3Scholls JS:
https://www.w3schools.com/js/default.asp

w3schools Bootstrap:
https://www.w3schools.com/bootstrap5/index.php

Bootstrap:
https://getbootstrap.com/

w3schools HTML:
https://www.w3schools.com/html/html5_video.asp

w3Schools CSS:
https://www.w3schools.com/css/css_navbar_horizontal.asp
