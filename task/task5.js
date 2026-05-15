//Task 1 — Student Registration Form
let student=prompt("enter student name")
let department=prompt("enter department")
let age=prompt("enter student age")
const output=`welcome ${student}
department:${department}
age:${age}`;
console.log(output);
//output:
//welcome swapna
//department:ece
//age:27
//========================================

//Task 2 — ATM Withdrawal System
let userbalance=10000;
let withdrawlamount=prompt("enter withdrawl amount");
let minimumwithdrawamount=100;
if (withdrawlamount<=userbalance && withdrawlamount >=100){
    console.log("transaction successful")
}else if(withdrawlamount<minimumwithdrawamount){
        console.log("minimum withdraw amount is 100");
}else{
    console.log("insufficient balance")
}
//output: (i gave withdraw amount 50)it shows 
//minimum withdraw amount is 100
//=========================================

//ask 3 — Swiggy Discount Checker
let orderamount=Number(prompt("enter the amount"));
orderamount>499 ? console.log("free delivery available"): console.log("delivery charges applied");
//output: i entered amount 300 showing delivery charges applied
//=============================================

//Task 4 — Instagram Login System
let username = prompt("enter username:");
if(username=="admin"){
    let password=prompt("enter password:");
    if(password=="1234"){
        console.log("login success");
    }else {
        console.log("wrong password");
    }
}else{
    console.log("invalid username");
}
//Task 5 — Traffic Signal System
let trafficlights=["red","yellow","green"];
for (let trafficlight of trafficlights){
    switch(trafficlight){
        case "red" : console.log("STOP");
            break;
        case "yellow": console.log("READY");
            break;
        case "green" : console.log("GO");
            break;
}
}
//output:
//STOP
//READY
//GO
//============================================

//Task 6 — Employee Salary Calculator
function salarycalculation(basicsalary,bonus){
    let totalsalary = basicsalary+bonus;
    return totalsalary
}
console.log(salarycalculation(25000,5000))
//output:30000
//===============================================

//Task 7 — E-Commerce Cart Total
let prices=[100,200,300,400];
let total=0;
let average =0;
for(let i=0;i<prices.length;i++){
    total+=prices[i];
}
average=total/prices.length;
console.log("total price is:"+total);
console.log("average is:"+average);
//output:
//total price is:1000
//average is:250
//=================================================

//Task 8 — WhatsApp Contact Book
let obj={
    name : "swapna",
    phone : "1234567890",
    status : "online"
}
for(let a in obj){
    console.log(a,obj[a]);
}
//output
//name swapna
//phone  1234567890
//status  online
//================================================

//Task 9 — Movie Ticket Booking
function payment(){
    console.log("payment completed successfully");
}
function bookticket(movie,callback){
        console.log("booking ticket for:"+movie);
        console.log("ticket booked successfully");
        callback();
}
bookticket("The good dinosaur",payment);
//output:
//booking ticket for:The good dinosaur
//ticket bookedsuccseefully
//payment completed successfully
//=============================================

//Task 10 — Food Delivery Time Tracker
function* gen(){
    yield "Order Confirmed"
    yield "Preparing Food"
    yield "Out for Delivery"
    yield "Delivered"
}
let generator =gen()
for(let b of generator){
    console.log(b);
}
//output:
//order confirmed
//preparing food
//out for delivery
//delivered