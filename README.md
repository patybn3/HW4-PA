# Homework 3 - Graphical User Interface 1
## UML, Professor Zhou, Computer Science
## Student: Patricia Antlitz
## Date: 06/01/2024
## url: https://patybn3.github.io/HW_3_PA_GUI1/

## Assignment:

For this assignment you will create a table completely dynamically based on parameters entered
in an HTML form. First, you must create a form that accepts the starting and ending numbers for
both the horizontal (multiplier) and vertical (multiplicand) axes of a multiplication
table. Second, you will use the numbers entered into the form to create a multiplication table
completely dynamically. What you will create is commonly called a “single page web app” (or
application).

Here’s what a reasonable multiplication table looks like.

<img width="281" alt="Screenshot 2024-06-03 at 2 16 52 PM" src="https://github.com/patybn3/HW_3_PA_GUI1/assets/59259041/fa4a5402-802b-42a8-b9e7-b513b78d80fc">

Note that the numbers that go along the side of the table and those that go along the top (the
multiplier and the multiplicand) are arbitrary. The point of this assignment is for you to create a
program that can display the table given any arbitrary starting and ending numbers for the
multiplier and multiplicand. The human factors part of this assignment is that there are many
interesting things that can happen when users enter the four numbers.

Some MINIMAL requirements:
[x] The program should be able to handle at least numbers between -50 to 50. This
means the program should generate the correct result on the web within 1-2
minute. <br>
[x] Any unexpected input from the user should be handled gracefully (validation with
javascript and proper useful error message should be displayed; NO POPUP
windows) <br>
[x] Page should NOT rendered unresponsive when a large number is given as an
input. This should be error handled and prevented. <br>
[x] The generated table should be nicely formatted; The table should be placed in a
scrollable container, two headers (top row and first column fixed). <br>
[x] The table should still display in a reasonable way when it is bigger than the screen
size. <br>

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
