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


var time = prompt("Enter time in 24 format like 1900 ");

var one = "0100";
var two = "0200";
var three = "0300";
var four = "0400" ;
var five = "0500";
var six = " 0600";
var seven = " 0700";
var eight = "0800";
var nine = "0900";



if (time === one || time == 100){
document.write("Itz 1 am ...")
}else if (time === two || time == 200){
    document.write("Itz 2 am ...")
    }else if (time === three || time == 300){
        document.write("Itz 3 am ...")
        }else if (time === four || time == 400){
            document.write("Itz 4 am ...")
            }else if (time === five || time == 500){
                document.write("Itz 5 am ...")
                }else if (time === six || time == 600){
                    document.write("Itz 6 am ...")
                    }else if (time === seven || time == 700){
                        document.write("Itz 7 am ...")
                        }else if (time === eight || time == 800){
                            document.write("Itz 8 am ...")
                            }else if (time === nine || time == 900){
                                document.write("Itz 9 am ...")
                                }else if (time === 1000 || time == 1000){
                                    document.write("Itz 10 am ...")
                                    }else if (time == 1100 ){
                                        document.write("Itz 11 am ...")
                                        }else if (time == 1200 ){
                                            document.write("Itz 12 am ...")
                                            }else if (time == 1300 ){
                                                document.write("Itz 1 pm ...")
                                                }else if (time == 1400 ){
                                                    document.write("Itz 2 pm ...")
                                                    }else if (time == 1500 ){
                                                        document.write("Itz 3 pm ...")
                                                        }else if (time == 1600 ){
                                                            document.write("Itz 4 pm ...")
                                                            }else if (time == 1700 ){
                                                                document.write("Itz 5 pm ...")
                                                                }else if (time == 1800 ){
                                                                    document.write("Itz 6 pm ...")
                                                                    }else if (time == 1900 ){
                                                                        document.write("Itz 7 pm ...")
                                                                        }else if (time == 2000 ){
                                                                            document.write("Itz 8 pm ...")
                                                                            }else if (time == 2100 ){
                                                                                document.write("Itz 9 pm ...")
                                                                                }else if (time == 2200 ){
                                                                                    document.write("Itz 10 pm ...")
                                                                                    }else if (time == 2300 ){
                                                                                        document.write("Itz 11 pm ...")
                                                                                        }else if (time == 2400 ){
                                                                                            document.write("Itz 12 pm ...")
                                                                                            }


