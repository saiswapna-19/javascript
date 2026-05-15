//section 1: variables
//1.
var a = 10;
a = 15;
console.log(a);
//Answer: output:15

//2.
//let b = 20;
//let b = 30;
//console.log(b) 
//Answer: in let variable redeclaration is not accepted.

//3.
const c = 50;
console.log(c); 
//output : 50

//4.
//const x = 10;
//x = 20;
//console.log(x);
//Answer: In const variable reuse is not accepted.

//5
var p = 5;
var p = 10;
console.log(p); 
// output :10

//6
let q = 25;
q = q + 10;
console.log(q); 
//output :35

//7.
const r = 7;
console.log(r + 3); 
//output : 10

//8.
//___ a = 10; 
//output : we can use var variable

//section:2 console methods

//9.Which method prints normal output? 
//Answer: console.log()

//10.	Which method shows warning?
//Answer:console.worn()

//11.	Which method shows error? 
//Answer:console.error()

//12.	What does this do? 
//console.clear();
// Answer:Removes all previous logs, warnings, and errors from the console.

//section : 3 data types
//13.
let a1= "hello";
console.log(typeof (a1));
//output:string

//14.
let b1 = 100;
console.log(typeof(b1));
//output:number

//15.
let c1= false;
console.log(typeof (c1));
//output:boolean

//16.
let d1;
console.log(d1);
//output:undefined

//17.	
// What is type of null? 
//answer : null is a primitive type representing "no value" or "nothing"

//18.	Convert string to number 
let num="25"
console.log(num)
//output:25

//section:4 arrays

//19.create array of 3 fruits
let fruit =["apple","banana","cherry"]
console.log(fruit);
//Answer:"apple","banana","cherry"

//20.
let arr = ["a","b","c"];
console.log(arr[1]);
//Answer:b(arr[1] means index.index starts with 0)

//21.
let arr1 = ["x","y","z"];
console.log(arr1[arr1.length-1]);
//Answer:z(length-1 means total length of the arr1 is 3 and -1 means we get last value of the array 3-1=2 )

//22.How to get first element? 
console.log(arr1[0]);
//Answer:x

//23.
let arr2 = ["apple","banana"];
console.log(arr2.length);
//Answer:2

//24.adding element to array
arr2.push("cherry")
console.log(arr2);
//Answer:"apple","banana","cherry"

//25.Create object with name & age.

let details= {
    name:"swapna",
    age:29,
}
console.log(details);
//Answer: ,age:29,name:"swapna"
//26.
let obj = {name:"swapna"}
console.log(obj.name);
//Answer:swapna

//27.
let obj1 = {
  fruits: ["apple","banana"]
}
console.log(obj1.fruits[1]);
//Answer:banana

//28.How to access last element inside object array?
console.log(obj1.fruits[obj1.fruits.length-1]);
//Answer:banana

//section:5 Arithmetic operators
//29.
console.log(5 + 3);
//Answer:8

//30.
console.log(10 % 3);
//answer:1

//31.
console.log(2 ** 3);
//Answer:8

//32.
console.log(10 / 2);
//Answer:5

//section:7 increment/decrement
//33.
let h= 5;
h++;
console.log(h);
//Answer:6 (5+1=6)

//34.
let i = 5;
let j = i++;
console.log(i, j);
//Answer:(6,5) if the finding element first finds in value side means we have to calculate the entire value in value side so i=5+1=6
//for j :the finding element first available in variable side so we have to calculate till the variable so j=i i value is 5 so j=5

//35.
let x = 5;
let y = ++x;
console.log(x, y);
//Answer(6,6) finding element is x so x is first available in value side so we have to calculate entire value in valueside so x=+1+5=6 
//the finding element first available in variable side so we have to calculate till the variable so y=+1+5=6

//36.
let m = 3;
let n = m--;
console.log(m, n);
//Answer:(2,3)finding element is m so m is first available in value side so we have to calculate entire value in valueside so m=-1+3=2 
//the finding element first available in variable side so we have to calculate till the variable so n=m and m value is 3


//section:8 comparison & logical 
//37.
console.log(5 == "5");
//Answer:true. the loose equality operator compares only number

//38.
console.log(5 === "5");
//Answer:false.the strictequality operator compares both number and type
//39.
console.log(true && false || true);
//Answer:true.&& operator requires both sides true
//            ||operator requires one side true
//section:9 ternary
//40.
5 > 3 ? console.log("Yes") : console.log("No");
//Answer:yes. if the condition is true the ternary operator executes first condition else second condition