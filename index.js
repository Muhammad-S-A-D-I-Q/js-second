document.write("<h1>Chapter 5</h1>");

var five = 5 ;
var three = 3;
var sumFivThr = five + three ;

document.write("The Sum of 3 and 5 is "+sumFivThr + "</br>");

var five = 5 ;
var three = 3;
var subFivThr = five - three ;

document.write("The Subtraction of 3 and 5 is "+subFivThr+ "</br>");

var five = 5 ;
var three = 3;
var mulFivThr = five * three ;

document.write("The Multiply of 3 and 5 is "+mulFivThr+ "</br>");


var five = 5 ;
var three = 3;
var divFivThr = five / three ;

document.write("The Division of 3 and 5 is "+divFivThr+ "</br>");

var five = 5 ;
var three = 3;
var modFivThr = five % three ;

document.write("The Modulus of 3 and 5 is "+modFivThr+"</br></br>");


//end





var myVariable;


document.write("Value after variable declaration is: " + myVariable + "<br>");


myVariable = 5;


document.write("Initial value: " + myVariable + "<br>");

myVariable++;


document.write("Value after increment is: " + myVariable + "<br>");


myVariable += 7;


document.write("Value after addition is: " + myVariable + "<br>");


myVariable--;


document.write("Value after decrement is: " + myVariable + "<br>");


var remainder = myVariable % 3;


document.write("The remainder is: " + remainder + "<br>");

//end

var ticket =600;
var buyTic= 5;
var result = ticket*buyTic;
document.write("</br>"+"Total Cost to buying "+buyTic+" ticket = "+result)

//end 
document.write("<h2>Multiplication Table of 9</h2>");

for (var i = 1; i <= 10; i++) {
  var resul = 9 * i;
  document.write("9 x " + i + " = " + resul + "<br>");
}

//end

var celsiusTemperature = 28;


var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write("</br>"+celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");


var fahrenheitTemperature2 = 82;


var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2.toFixed(2) + "°C");
 
//end



var priceItem1 = 650;
var priceItem2 = 100;


var quantityItem1 = 3;
var quantityItem2 = 7;


var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Shopping Cart:</h2>");

document.write("<p>Price of Item 1: " + priceItem1 + "</p>");
document.write("<p>Price of Item 2: " + priceItem2 + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: " + shippingCharges + "</p>");
document.write("<p>Total Cost: " + totalCost + "</p>");

//end
var tot =980;
var obtain = 804; 
var res = (obtain/tot)*100;

document.write("<h2>Result</h2>");
document.write("<p>Total Marks: " +tot+ "</p>");
document.write("<p>Marks Obtained: " +obtain+ "</p>");
document.write("<p>Percentage: " + res.toFixed(3) + "%</p>");

//end
document.write("</br>"+"<h2>Currency in PKR</h2>");

var dollar = 286.95;
var saudiRiyal=76.52; 
var totalC = (10*dollar)+(25*saudiRiyal);
document.write("Total currency is "+totalC + "</br>");

//end 
document.write("</br>"+"</br>"+"In 4 Add 5\n Multiply by 10\n Divide the result by 2");
var cal =4;
var resul = ((cal+5)*10)/2;
document.write("</br>"+resul);

//end
document.write("<h2>Age Calculator</h2>")

var birthYear = +prompt("Enter your right Birthyear..!")
var currentYear = 2023;
var truthAge = currentYear-birthYear;
document.write(birthYear+" the year you born </br>");
document.write(currentYear+" the current year</br>");
document.write(truthAge+" your<sup>,</sup>s truth age ...");

//end
document.write("</br><h2>The Geometrize:</h2>")
var radius = 20
var circumference= 125.67999999999999;
var area = Math.PI * radius * radius ;
document.write("The radius is "+radius+"</br>");
document.write("The circumference is " + circumference+"</br>");
document.write("The area is " + area.toFixed(2));
//end
document.write("<h2>The Lifetime Supply Calculator:</h2>");
var favoriteSnack = "Chocolate bars";
var currentAge = 30;
var maximumAge = 80;
var amountPerDays = 2;
var remainingYears = maximumAge - currentAge;
var totalQuantity = remainingYears * 365 * amountPerDays;
document.write("Your favorite snack: " + favoriteSnack+"</br>");
document.write("Current Age: " + currentAge+"</br>");
document.write("Maximum Age: " + maximumAge+"</br>");
document.write("Estimated amount per day: " + amountPerDays+"</br>");
document.write("Total quantity for the rest of your life: " + totalQuantity+"</br>");
//end

