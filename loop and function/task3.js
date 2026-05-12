//looping statements
//1.Print numbers from 1 to 20 using a for loop.
for(let a =1; a<=20; a++){
    console.log(a);
    
}
//output: 
// 1 
// 2 
// 3
// 4 
// 5 
// 6 
// 7 
// 8 
// 9 
// 10 
// 11 
// 12 
// 13 
// 14 
// 15 
// 16 
// 17 
// 18 
// 19 
// 20


//odd numbers
//2.Print all odd numbers from 1 to 50.
for(let b =1; b<=50; b++){
    if(b%2==1){
        console.log(b);
        
    }
}
//output:1 
// 3 
// 5 
// 7 
// 9 
// 11 
// 13 
// 15 
// 17 
// 19 
// 21 
// 23 
// 25 
// 27 
// 29 
// 31 
// 33 
// 35 
// 37 
// 39 
// 41 
// 43 
// 45 
// 47 
// 49


//3.Print the multiplication table of 7.
let n = 7;
for(let i=1; i<=10; i++){
    if(n*i==n*i){
        console.log(`${n} * ${i} = ${n * i}`)
    }
}
//output:
// 7*1=7
//7*2=14
//7*3=21
//7*4=28
//7*5=35
//7*6=42
//7*7=49
//7*8=56
//7*9=63
//7*10=70


//reverse counting
//4.Using while loop, print numbers from 20 to 1.
let c = 20;
while(c>=1){
    console.log(c)
    c--
}
//output:
//20
//19
//18
//17
//16
//15
//14
//13
//12
//11
//10
//9
//8
//7
//6
//5
//4
//3
//2
//1


//sum of numbers
//5.Find the total sum of numbers from 1 to 100.
let sum=0
for(let d = 1; d<=100; d++){
    sum+=d   
}console.log(`total sum is:`,sum);
//output:total sum is:5050


//6.Array Loop
let fruits = ["apple","banana","orange","grapes"];
for (let a of fruits){
    console.log(a)
}
//output:
// apple
//banana
//orange
//grapes


//even numbers
//7.Count how many even numbers are present between 1 to 50.
let count=0
for(let e=1; e<=50; e++){
    if(e%2==0){
    count=count+1
    }
}console.log(`total even numbers:`,count);
//output:total even numbers:25


//star pattern
//8.Print this pattern using loops
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
//output:
//*
//**
//***
//****
//*****


//Function
//Create a function named welcome() that prints:
//Welcome to JavaScript
function welcome(){
    console.log(`welcome to javascript`)
}
welcome()
//output:welcome to javascript


//10. Function with Parameter
//Create a function that accepts a name and prints:
//Hello Naveen
function named(name){
    console.log("hello" +" " +name)
}
named( "swapna")
//output:hello swapna


//11. Add Two Numbers
//Create a function that takes 2 numbers and returns the addition.
function add(num1,num2){
    let x=num1+num2;
    return x
}console.log(add(10,20))
//output:30


//12. Salary Bonus
//Create a function that adds bonus to employee salary.
function employee(){
    let salary=50000
    let bonus=5000
    let emp=salary+bonus
    return emp
    
}console.log(employee())
//output:55000


//13. Object Loop
//Print all keys and values using for in.
let student = {
    name : "swapna",
    course : "JavaScript",
    marks : 95
}
for (let m in student){
    console.log(m,student[m])
}
//output:
//name swapna
//course javascript
//marks 95


//14. Find Largest Number
//Create a function to find the largest number between two values.
function greatest(a,b){
    if(a>b){
        console.log(a)
    }else{
        console.log(b)
    }
}
greatest(10,50)
//output:50


//15. Mini Employee Task
//Create an employee object and print:
function employeedetails(name,department,salary,bonus){
    let employee={
        name:name,
        department:department,
        salary:salary,
        bonus:bonus,
    }
    function addbonus(salary,bonus){
        return salary+bonus
    }   
    console.log("employeename:" ,name);
    console.log("employeedepartment:", department);
    console.log("employeesalary:", salary);
    console.log("salaryafterbonus:" ,addbonus(employee.salary,bonus));
}
employeedetails("swapna","developer",55000,5000)
    //output:
    //employeename:swapna
    //employedepartment:developer
    //employeesalary:55000
    //salaryafterbonus:60000