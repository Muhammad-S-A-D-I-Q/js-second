
// first program
var cap = prompt("Enter the capital of pakistan ?");
var score = 0 ;
if(cap === "islamabad" || cap === "Islamabad" || cap === "ISLAMABAD" || cap === "islamabad "){
score=2;
document.write("</br></br>"+"Your Ans: "+cap+"</br>Correct ...! </br> Score: "+score );
}else if(cap === "" || cap === " " || cap === "    " || cap === "   "){
    document.write("You did not enter the answer...! ");

}else{
    document.write("</br></br>"+cap+"</br>Incorrect...! </br> Try again...!");
}

// second program


var province =prompt("How many provinces in 'Pakistan' ?");
var sco = 0 ; 
if(province === "four" || province == 4 || province === "Four" || province === "FOUR"){
sco = 2 ;
document.write("</br></br>"+"Your Ans: "+province+"</br> Correct ...! </br> Score: "+sco);
}else if(province === ""){
    document.write("</br></br>You did not enter the answer...!");
}else{
    document.write("</br></br>"+province+"</br>Incorrect...! </br> Try again...!")
}


var tolsco =score + sco  ;
document.write("</br></br>total :"+tolsco);
// third end and or

alert("check console");
console.log("boolean and || &&");
console.log(null || true && true || false && true);

//fourth array
console.log("Array");
var cities =["karachi", "lahore", "islamabad" ]
console.log(cities);

console.log("Math expressions");
var num = 3;
var num2 = 5;
var num3 =9;
var totnum = num+num2*num3 ;
console.log(totnum);

var totnum1 = num%num3;
console.log(totnum1);















