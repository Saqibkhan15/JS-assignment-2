// Assignment chapter no 3 to  chapter no 6
// Chapter no 3

// Q1
// var age = " im 29 years old"
// alert(age)

// Q2
// var note = " you have visited this site 15 times"
// alert(note)
// Q3
// var birthYear = 1990;
// document.write("My birth year is " + birthYear + " \nDeclare variable and assign birth year ");

// Q4

// var visitorName = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;

// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");

// chapter 4
//Declare 3 variables in one statement
// var a, b, c;

// Legal variable names
// var myVariable, _anotherVariable, $thirdVariable, name123, camelCaseVariable;

//Illegal variable names
// var 123variable, my-variable, my variable, my@variable, class;


// document.write("<h2>Rules for naming JS variables</h2>");
// document.write("<h6>Variable names can only contain letters, numbers, underscores (_), and dollar signs ($)</h6>");
// document.write("<h6>For example: $my_1stVariable<h6>");   

// document.write("<h6>Variables must begin with a letter, underscore (_), or dollar sign ($)<h6>");
// document.write("<h6>For example: $name, _name, or name<h6>");
// document.write("<h6>Variable names are case sensitive<h6>");
// document.write("<h6>Variable names should   not be JavaScript keywords<h6>");


// // chapter 5

// var num1 = 20;
// var num2 = 10;
// document.write("The sum of 20 and 10 is: " + (num1 + num2));


// var num1 = 20;
// var num2 = 10;
// document.write("The Subtraction of 20 and 10 is: " + (num1 - num2));



// var num1 = 20;
// var num2 = 10;
// document.write("The multipication of 20 and 10 is: " + (num1 * num2));


// var num1 = 20;
// var num2 = 10;
// document.write("The division of 20 and 10 is: " + (num1 / num2));



// var num1 = 20;
// var num2 = 10;
// document.write("The modulus is: " + (num1 % num2));


// var num = 5;
// document.write("Value after variable declaration is: " + num + "<br>");

// num = 5;
// document.write("Initial value: " + num + "<br>");

// num++;

// document.write("Value after increment is: " + num + "<br>");

// num += 7;
// document.write("Value after addition is: " + num + "<br>");

// num--;
// document.write("Value after decrement is: " + num + "<br>");

// document.write("The remainder is: " + (num % 3) + "<br>");


// var ticket = 600;
// var total = ticket * 5;

// document.write("Total cost to buy 5 tickets to a movie is " + total + " PKR");



// var tab = 2;
// var num1 = 1;
// var num2 = 2;
// var num3 = 3;
// var num4 = 4;
// var num5 = 5;
// var num6 = 6;
// var num7 = 7;
// var num8 = 8;
// var num9 = 9;
// var num10 = 10;
// document.write("Table of 2 <br/>");
// document.write("2*1="+ (tab*num1) + "<br/>")
// document.write("2*1="+ (tab*num2) + "<br/>")
// document.write("2*1="+ (tab*num3) + "<br/>")
// document.write("2*1="+ (tab*num4) + "<br/>")
// document.write("2*1="+ (tab*num5) + "<br/>")
// document.write("2*1="+ (tab*num6) + "<br/>")
// document.write("2*1="+ (tab*num7) + "<br/>")
// document.write("2*1="+ (tab*num8) + "<br/>")
// document.write("2*1="+ (tab*num9) + "<br/>")
// document.write("2*1="+ (tab*num10) + "<br/>")



// var celsius = 30;
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F");
// var fahrenheit = 86;
// var celsius = (fahrenheit - 32) * 5/9;
// document.write(fahrenheit + "°F is " + celsius + "°C")


// var priceItem1 = 650;  
// var priceItem2 = 100;  
// var quantityItem1 = 3;  
// var quantityItem2 = 7;  
// var shippingCharges = 100;  
// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
// document.write("Price of item 1: " + priceItem1 + "<br>");
// document.write("Ordered quantity of item 1: " + quantityItem1 + "<br>");
// document.write("Price of item 2: " + priceItem2 + "<br>");
// document.write("Ordered quantity of item 2: " + quantityItem2 + "<br>");
// document.write("Shipping charges: " + shippingCharges + "<br>");
// document.write("Total cost: " + totalCost );

// var totalMarks = 980;

// var marksObtained = 804;

// var percentage = (marksObtained / totalMarks) * 100;

// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%");


// var usdToPkr = 278.58;
// var sarToPkr = 74.23;

// var usd = 10;
// var sar = 25;
// var totalInPkr = (usd * usdToPkr) + (sar * sarToPkr);
// document.write("Total PKR: " + totalInPkr);
// var num = 10;
// var result = (((num + 5) * 10) / 2);
// document.write("Result: " + result);



// var currentYear = 2024;

// var birthYear = 1995;

// var age = currentYear - birthYear;

// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Age: " + age + " years old");

// Circle ka radius ek variable mein store karein
var radius = 5;

// Circumference calculate karein aur output dikhaein
var circumference = 2 * 3.142 * radius;
document.write("Circumference hai: " + circumference + "<br>");

// Area calculate karein aur output dikhaein
var area = 3.142 * radius * radius;
document.write("Area hai: " + area);


// Store the circle's radius in a variable
var radius = 5;

// Calculate the circumference and display output
var circumference = 2 * 3.142 * radius;
document.write("The circumference is: " + circumference + "<br>");

// Calculate the area and display output
var area = 3.142 * radius * radius;
document.write("The area is: " + area);
