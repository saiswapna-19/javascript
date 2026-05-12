//Task 1 – Predict the Output
//Write the output and datatype for below:
console.log("10" + 5);
//output: 105 
// data type:string

console.log(10 + true)
//output:11 
//datatype:number

console.log(false + null)
//output:0
//datatype: number

console.log("Hello" + undefined)
//output:Helloundefined
//datatype:string

console.log([1,2] + 5)
//output:1,25
//datatype:string


//Task 2 – Implicit Type Casting
//Create examples for:
//1.	String + Number 
console.log(typeof("swapna" +19))
//output:swapna19
//datatype:string

//2.	Boolean + Number 
console.log(typeof(true + 19));
//output:20
//datatype:number

//3.	Array + String
console.log(typeof([1,2]+"swapna"))
//output:1,2swapna
//datatype:string

//4.	Object + Number
console.log(typeof({s:19} + 1));
//output:[object object]1
//datatype:string
 
//5.	Null + Number 
console.log(typeof(null+19));
//output:19
//datatype:number


//Task 3 – Explicit Type Casting
//Convert the following into Number:
//1.""500
console.log(Number("500"))
//output:500

//2.true
console.log(Number(true))
//output:1

//3.false
console.log(Number(false))
//output:0

//4.null
console.log(Number(null))
//output:0

//5."abc"
console.log(Number("abc"))
//output:NaN

//6.[100]
console.log(Number([100]))
//output:100


//Task 4 – Boolean Constructor
//Check whether below values are true or false using Boolean().
//1.""
console.log(Boolean(""))

//2."javascript"
console.log(Boolean("javascript"))

//3.0
console.log(Boolean(0))

//4.1
console.log(Boolean(1));

//5.null
console.log(Boolean(null));

//6.undefined
console.log(Boolean(undefined))

//7.[]
console.log(Boolean([]))

//8.{}
console.log(Boolean({}))


//Task 5 – Student Pass or Fail
let mark = 45;
if (mark >=35){
    console.log("student is pass")
}else{
    console.log("student is Fail");
        
}


//Task 6 – Voting Eligibility
let age = prompt("enter your age");
if(age>=18){
    console.log("eligible for voting")
}else{
    console.log("not eligible for voting")
}



//Task 7 – Greatest Number
let a = 50
let b = 80
let c = 30
if (a > b && a > c) {
    console.log("a is the greatest" ,a);
} else if (b > a && b > c) {
    console.log("b is the greatest", b);
} else {
    console.log("c is the greatest",  c);
}



//Task 8 – Traffic Light System
//Using switch statement:
let trafficlight = prompt("enter traffic light colour(red,yellow,green):");

switch (trafficlight) {

    case "red": console.log("stop your vehicle");

        break;
    case "yellow": console.log("ready your vehicle");
    
        break;
    case "green": console.log("start your vehicle");
    
        break;

    default:console.log("happy journey");
    
        break;
}



//Task 9 – Login System

let username = "admin"
let password = "1234"
let inputuser = prompt("Enter username:");
let inputpass = prompt("Enter password:");

if (inputuser == username) {
    if (inputpass == password) {
        if(inputuser==username && inputpass==password){
            console.log("login success");
        }else(console.log("invalid login"))
    } else {
        console.log("Invalid password");
    }
} else {
    console.log("Invalid username");
}


//Task 10 – Session Finder
let hour = prompt("enter the hour(1-24)");

if (hour >= 1 && hour <= 12) {
    console.log("Morning");
} else if (hour >= 13 && hour <= 15) {
    console.log("Afternoon");
} else if (hour >= 16 && hour <= 19) {
    console.log("Evening");
} else if (hour >= 20 && hour <= 24) {
    console.log("Night");
} else {
    console.log("Invalid hour");
}


//Bonus Challenge 

console.log(true + true)
//output:2

console.log("5" - 2)
//output:3

console.log("5" + 2)
//output:52

console.log(null + 1)
//output:1

console.log(undefined + 1)
//output:NaN

console.log(Boolean(" "))
//output:true

console.log(Number(true))
//output:1

