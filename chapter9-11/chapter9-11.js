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

var gender = prompt("Enter Gender");
if(gender === "male" || gender === "Male" || gender === "MALE"){
    document.write("Good morning . Sir ,");
}else if (gender === "female" || gender === "female" || gender === "FEMALE"){
    document.write("Good morning . Madam ,")
}

//end
document.write("</br></br></br>");

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
