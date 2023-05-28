document.write("<h1>Chapter 6-9</h1>");
document.write("<h2>Result :</h2>");
var a=10;


document.write("The value of a = "+a+"</br></br>");
document.write("--------------------------------"+"</br></br>")

document.write("The value of ++a is "+ ++a +"</br>");
document.write("Now the value of a is "+ 11 +"</br></br>");


document.write("The value of a++ is "+a++ +"</br>");
document.write("Now the value of a is "+ 12 +"</br></br>");


document.write("The value of --a is " + --a +"</br>");
document.write("Now the value of a is " + 11 +"</br></br>");

document.write("The value of --a is " + a-- +"</br>");
document.write("Now the value of a is " + 10 +"</br></br>");

//end
document.write("</br></br></br>");
document.write("<h2>Explaining the output step by step:</h2>");
var a = 2, b = 1;
var calc = --a - --b + ++b + b--;
document.write("The value of a is 2 </br></br>The value of b is 1</br></br> the value of --a is "+1+"</br></br>")
document.write("The value of --a - --b is 0 </br></br>")
document.write("The value of --a - --b + ++b is 2 </br></br>");
document.write("The value of --a - --b + ++b + b-- is ");
document.write(calc);
//end

document.write("</br></br></br>");
document.write("<h2>Greeting Massage : </h2>");
var userName = prompt("Enter your name...!");
document.write("<h3>Hello"+" "+userName+"</h3>");


//end

document.write("</br></br></br>");
var number = prompt("Enter a number:");
number = parseInt(number);
if (!isNaN(number)) {
  document.write("<h2>Multiplication Table of " + number + " :</h2>");

  for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
  }
}

else {
  document.write("<h2>Multiplication Table of 5 (Default) : </h2>");

  for (var i = 1; i <= 10; i++) {
    document.write("5 x " + i + " = " + (5 * i) + "<br>");
  }
}

      
//end
document.write("</br></br></br>");
document.write("<h2>Mark Sheet :</h2>");

var subject1 = ("English");
var subject2 = ("Urdu");
var subject3 = ("Math");
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for English:"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for Urdu:"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for Math:"));
var totalMarks = 100;

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<table border='2'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td><strong>Total</strong></td><td><strong>" + (totalMarks * 3) + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td></tr>");
document.write("<tr><td colspan='2'><strong>Percentage :</strong></td><td><strong>" + percentage.toFixed(2) + "%</strong></td></tr>");
document.write("</table>");