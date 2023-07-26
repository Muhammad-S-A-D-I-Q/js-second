document.write("<h1>Chapter 12-13</h1>");






//




document.write("<h2>ASCII Character's...</h2>");

var inpChar = prompt("Input a character (number or alphabet)");

var  asciicod  = inpChar.charCodeAt(0);

if   (asciicod  >= 48 && asciicod <= 57) {
    document.write("The input is a number.");
}else if   (asciicod  >= 65 && asciicod <= 90) {
    document.write("The input is a uppercase alphabet ...");
}else if   (asciicod  >= 97 && asciicod <= 122) {
    document.write("The input is a lowercase alphabet.");
}else{
    document.write("Please enter a valid character ");
}




document.write("</br></br>");

document.write("</br></br>");

/// Larger and equal

document.write("<h2> The larger integer display and two integer are equal ... </h2>");


var FirstInteger = parseInt(prompt("Enter first integer"));

var secondInteger = parseInt(prompt("Enter second integer"));

var Equ = FirstInteger === secondInteger ;

var larger = FirstInteger > secondInteger ? FirstInteger : secondInteger ;


document.write("The two integer are Equal too " + Equ);

document.write("</br>");


document.write("The larger integer is " + larger);

document.write("</br></br>");

document.write("</br></br>");

//// TO check whether the is positive or negative or zero 

document.write("<h2> Check the number is positive or negative</h2>");

var posNum = parseFloat(prompt("Enter a number to check whether is positive or negative or zero"));


if (posNum > 0){
    document.write("Number is positive");
}else if (posNum < 0){
    document.write("Number is negative");
}else {
    document.write("Zero...");
}



document.write("</br></br>");

document.write("</br></br>");

///vowel 

document.write("<h2>Vowel</h2>");

var vowel = prompt("enter a vowel  "); 

if ( vowel==="a"|| vowel ==="e" || vowel === "i"|| vowel ==="o" || vowel === "u"||vowel==="A"|| vowel ==="E" || vowel === "I"||vowel==="O"|| vowel ==="U" ){
document.write("This letter is a vowel 'True' ");
}else{
    document.write("This letter is a vowel 'False' ");
}



document.write("</br></br>");

document.write("</br></br>");




/// password wala program

document.write("<h2>Password Program</h2>");

var correctpass = "password";

var userPass = prompt("Enter password","Hint : password" );

if (correctpass === null || correctpass === ""){
document.write("Please enter a Password")
}else if(correctpass===userPass){
    document.write("Correct! The password you entered matches the original password.");
}else{
   document.write("Incorrect password.");
}



document.write("</br></br>");

document.write("</br></br>");

/// fix program
document.write("<h2>TRY to fixed program</h2>");




var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}


document.write(greeting);



document.write("</br></br>");

document.write("</br></br>");


///clock program


document.write("<h2>Clock</h2>");

// Get the time input from the user (in 24-hour clock format)
var timeInput = prompt("Enter the time in 24-hour clock format (e.g., 1900):");
var time = parseInt(timeInput);

// Check if the input is valid (between 0 and 2359) and has 4 digits
if (isNaN(time) || time < 0 || time > 2359 || timeInput.length !== 4) {
    document.write("Invalid input. Please enter a valid 24-hour clock time.");
} else {
    // Extract the hour and minute parts from the input
    var hour = Math.floor(time / 100);
    var minute = time % 100;

    // Convert to 12-hour clock format
    var period = hour >= 12 ? "PM" : "AM";
    hour = (hour % 12) || 12;

    document.write("The time is " + hour + ":" + (minute < 10 ? "0" + minute : minute) + " " + period);
}


