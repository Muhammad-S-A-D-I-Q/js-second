document.write("<h1>Chapter 9-11</h1>");

var city = prompt("Enter city name Karachi");
if(city === "karachi" || city === "Karachi" || city === "KARACHI"){
    document.write("<h3>Wellcome To City Of Light !</h3>");

}else if (city === "  " || city === "" ){
    document.write("Enter city name !")
}else {
    document.write("<h3> Wellcome to "+  city  +" </h3>")
}


//end


document.write("</br></br></br>");

document.write("<h2> Greeting </h2>");
var gender = prompt("Enter Gender");
if(gender === "male" || gender === "Male" || gender === "MALE"){
    document.write("Good morning . Sir ,");
}else if (gender === "female" || gender === "female" || gender === "FEMALE"){
    document.write("Good morning . Madam ,")
}

//end
document.write("</br></br></br>");

document.write("<h2> Traffic light check !</h2>");

var trafficlig = prompt("Enter the color of traffic light !");

if(trafficlig === "red" || trafficlig === "Red" || trafficlig === "RED"){
    document.write("Must Stop...");
  }else if (trafficlig === "yellow" || trafficlig === "Yellow" || trafficlig === "YELLOW"){
    document.write("Ready to move...");
  }else if (trafficlig === "green" || trafficlig === "Green" || trafficlig === "GREEN"){
    document.write("Move noe");
  }
  //end
  document.write("</br></br></br>");
  document.write("<h2>Program to check fuel </h2>");
  var remainingFuel = prompt("Enter the remaining fuel in your car (in liters):");
  if (remainingFuel < 0.25) {
    document.write("Please refill the fuel in your car.");
  }else if (remainingFuel === null ) {
    document.write("Enter the fuel level in liter !");
  }else{
    document.write("Fuel level is sufficient.");
  }

  //end

  document.write("</br></br></br>");
  document.write("<h2>check and run script :</h2>");

//a
 var A = 4;
if (++A === 5){
alert("given condition for variable a is true");
document.write("condition a is true </br>");
}
//b
var B = 82;
document.write("condition b can not display </br>");
if (B++ === 83){
alert("given condition for variable b is true");
}
//c
var C = 12;
if (C++ === 13){
alert("condition 1 is true");
document.write("condition c is true </br>");
}
if (C === 13){
alert("condition 2 is true");
document.write("condition c is true </br>");
}
if (++C < 14){
alert("condition 3 is true");
}
if(C === 14){
alert("condition 4 is true");
}
//d
var materialCost = 20000;

var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
document.write("condition d is equal cost </br>");
}
//e
if (true){
alert("True");
document.write("condition e is true </br>");
}
if (false){
alert("False");
} 

//f
if("car" > "cat"){
alert("car is bigger than cat");
}
document.write("condition f can not display</br>");
//end


document.write("</br></br></br>");

//mark sheet

document.write("<h2> Mark Sheet </h2>");

alert("Maximum number is 100 per subject");
var subject1 = ("English");
var subject2 = ("Science");
var subject3 = ("Math");
var totalnum = 300 ;

var num = parseInt(prompt("enter "+  subject1+ " number"));
var num2 = parseInt(prompt("enter "+ subject2+ " number"));
var num3 = parseInt(prompt("enter "+ subject3+ " number"));

var totalObtainedMark = num+num2+num3;

var percentAge = totalObtainedMark / totalnum *100 ;             


var grade = '' ;
var Remark
if (percentAge >= 80){
 grade = 'A+';
 Remark = 'Excellence'
}else if (percentAge >= 70){
  grade = 'A'; 
  Remark = 'Very Good';
}else if (percentAge >= 60){
  grade = 'B';
  Remark = 'Good';
}else if (percentAge >= 50){
  grade = 'C';
  Remark = 'You need to improved !';
}else if (percentAge >= 40){
  grade = 'D';
  Remark = 'Pass '; 
}else if (percentAge >= 100){
grade = ' ERROR'
Remark = 'Refresh and put subject number equal to 100 or below 100 '
}else {
  grade = 'Fail...'
  Remark = 'Sorry ... !'
}




document.write("Total Marks " + "&nbsp;&nbsp;&nbsp;:"+ totalnum);
document.write("</br>");
document.write("Marks obtain"+"&nbsp;&nbsp;&nbsp;:"+""+ totalObtainedMark);
document.write("</br>");
document.write("Percentage"+"&nbsp;&nbsp;&nbsp;:"+percentAge.toFixed(2) +"%");
document.write("</br>");
document.write("Grade"+"&nbsp;&nbsp;&nbsp;:"+grade);
document.write("</br>");
document.write("Remark"+"&nbsp;&nbsp;&nbsp;:"+Remark);

document.write("</br></br>");


document.write("</br></br>");


//Guess game 
document.write("<h2>Guess Game </h2>")
var secretnum = 4 ;
//secretnum = parseInt(secretnum);
alert("Guess the Number");
var guessNum = prompt("Enter a number !");
if( secretnum == guessNum   ){
         document.write("Bingo correct answer ... ");
}else if (++secretnum == guessNum ) {
            document.write("Close enough to the correct answer");
}else{
  document.write("Sorry try again");
}

document.write("</br></br>");


document.write("</br></br>");





//odd number ................................................................................................./.

document.write("<h2>To Check If Number Can divide by 3</h2>");

  var oddNum = parseInt(prompt("enter a number to check if it can divide by 3"));


if (oddNum %3 === 0){
  document.write("It can divide by 3 ");
}else{
  document.write("It can not divide by 3");
}


document.write("</br></br>");


document.write("</br></br>");



// even or odd

document.write("<h2>THE NUMBER IS EVEN OR ODD</h2>");

var OddOrEven = parseInt(prompt("Enter Number To Check IF Number Is EVEN or ODD"));

if (OddOrEven %3 === 0){
  document.write("The Number Is ODD"); 
}else if (OddOrEven %2 === 0){
  document.write("The number is even");
}else {
  document.write("You did not put the number or 1 is not even or odd");
}
