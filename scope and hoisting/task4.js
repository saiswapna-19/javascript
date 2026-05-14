//task-1   basic function
function welcomeUser(name){
    console.log("welcome"+ " "+name)
}
welcomeUser("swapna")
//output:welcome swapna

//==============================================

//task-2 parameter+return
//create a function squareNumber
function squareNumber(num){
    return  num * num;
}
console.log(squareNumber(5))  
//output:25
//==============================================

//task-3  object function
let obj = {
    name:"swapna",
    salary : 50000
}
function employeeBonus(bonus){

     return obj.salary+bonus
}
console.log(obj.name)
console.log(employeeBonus(5000 ))
//output:
// swapna
//55000
//===============================================

//task-4 scope checking
var x1=10
function scope(){
    if(true){
       let x2=20
        const x3=30
        console.log(x2)
        console.log(x3)
}
}
console.log(x1)
scope()
//output:
//10 - because var is a global scope we can console it any where in the code
//20 - because let is a block scope we have to run it with in this{} braces only outside of the blockspace it cannot run and it shows is not defined
//30 - because const  is a block scope we have to run it with in this{} braces only outside of the blockspace it cannot run and it shows is not defined
//=======================================================

//task-5 arrow function
let Arrow = (a,b)=>{
    console.log(a+b)
}
Arrow(3,5)
//output:8
//=======================================================

//task-6 callback function
function multiply(callback,a, b) {
  console.log( a * b);
}
function calculator( num1, num2) {
         console.log(num1-num2);
}
multiply(calculator, 5, 2);
//output:10
//=======================================================

//Task 7 — Generator Function
//Create generator function offers.
function* offer(){
    yield   "50% OFF" 
	yield   "Free Delivery" 
	yield   "Cashback"
}
let offers=offer()
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
//output:
//50% OFF
//Free Delivery
//Cashback
//=======================================================

//Task 8 — Default Parameter
let form=function(name,course="javascript"){
    console.log("name",name);
    console.log("course",course);
}
form("swapna","javascript")
form("sai")
//output:
//name swapna
//course javascript
//name sai
//course javascript we gave default parameter for course even if we dont mention the parameter it takes default
//=================================================

//Task 9 — Currying
//Create currying function for multiplication
function multiply(a){
    return function(b){
        return function(c){
            console.log(a*b*c)
        }

    }
    
}
multiply(2)(3)(4)
//output:24
//==============================================

//Task 10 — Spread Operator
//Merge these arrays:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged);
//output:
//0:1
//1:2
//2:3
//3:4
//4:5
//5:6
//length:6
//==============================================

//Task 11 — Object Spread
//erge two objects:
let obj1={name:"swapna"}
let obj2={role:"Developer"}
let totalobj={...obj1,...obj2}
console.log(totalobj);
//Output:
//name:"swapna",
//role:"Developer"
//===================================================

//Task 12 — Rest Operator
function numbers(a,b,...num){
    console.log(a,b,...num);
    console.log(a+b+num[0]+num[1]);
}
numbers(1,2,3,4)
//output:
//1 2 3 4 
//10
//===================================================

//Mini Challenge 🔥
//Create one small Student Management System using:
let students=[];                    
function addstudent(name,...marks){    
    let student={                   
        name:name,
        marks:marks
}
students = [...students,student];   
    return student;
}
addstudent("sai",80,60,45);
addstudent("swapna",90,50,60)

function  printstudents(){
    students.forEach(student=>{
    console.log(`name:${student.name}`)
    console.log(`marks:${student.marks}`)
});
}
printstudents()
function calculatemarks(student){
        let total = 0;
        student.marks.forEach(mark => {
            total += mark;
    });
    console.log(`${student.name}'s Total Marks= ${total}`);
}
calculatemarks(students[0]); 
calculatemarks(students[1]);

function addBonusMarks(student, bonus,callback) {
  student.marks = [...student.marks , bonus];
  callback(student);
}
function afterBonus(student) {
    let total = 0;
    student.marks.forEach(mark => {
        total += mark;
    });
    console.log(`After Bonus for ${student.name}: ${total}`);
}
addBonusMarks(students[0],15,afterBonus)
addBonusMarks(students[1],25,afterBonus)
//output:
//name:swapna
//marks:90,50,60
//sai's Total Marks= 185
//swapna's Total Marks= 200
//After Bonus for sai: 200
//After Bonus for swapna: 225
