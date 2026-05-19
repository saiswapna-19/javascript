// Task:- 1. API Task - User Names Uppercase

// API:
// https://jsonplaceholder.typicode.com/users

// Fetch all users.

// Use map()
// Convert all usernames to UPPERCASE.

// Print new array.

let api= "https://jsonplaceholder.typicode.com/users"
fetch(api)
.then((dataa)=>{
    console.log(dataa);
    return dataa.json()
})
.then((jsdata)=>{
    console.log(jsdata)
    const upperCaseUsernames = jsdata.map((user)=>user.username.toUpperCase());
    console.log(upperCaseUsernames);
})
.catch((error)=>{
    console.log(error);
})
//output
//Array(10)
  //0: "BRET",
  //1: "ANTONETTE",
  //2: "SAMANTHA",
  //3: "KARIANNE",
  //4: "KAMREN",
  //5: "LEOPOLDO_CORKERY",
  //6: "ELVIS",
  //7. "MAXIME_NIENOW",
  //8: "DELFINA",
  //9: "MORIAH.STANTON"
//length:10
//================================

// 2. API Task - Expensive Products

// API:
// https://fakestoreapi.com/products

// Fetch products.

// Use filter()
// Print products price greater than 100.
 fetch("https://fakestoreapi.com/products")
.then((data)=>{
    console.log(data);
    return data.json()
.then((products)=>{
    console.log(products)
const prices = products.filter(product=>product.price>100);
const productname = prices.map(product=>product.title);
    console.log(productname);
 })
 })
 .catch((error)=>{
    console.log(error)
 })
 //============================================

 // 3. Date Concept Task - Digital Clock

// Create one Date object.

// Print:
// current hours
// current minutes
// current seconds

let date =new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(`${hours} : ${minutes} : ${seconds}`);
//output: 14:53:42
//=========================================

// 4. String Concept Task - Username Checker

// Create one string:
// "   Naveen Kumar   "

// Remove spaces using trim().

// Convert into uppercase.

// Check string includes "KUMAR".

// Print final output.

let str = "  sai Swapna  ";
str=str.trim();
str=str.toUpperCase();
let hasname = str.includes("SWAPNA");
console.log(str);
console.log(hasname);
//output: SAI SWAPNA
//true
//=======================================

// 5. Array Concept Task - Student Rank System

// Create one array:
// [450, 300, 700, 200, 900]

// Sort marks high to low.

// Print top 3 marks only using slice().

let arr=[450,300,700,200,900]
let sortarr= arr.sort((a,b)=>{
    return b-a
})
let highest = sortarr.slice(0,3);
console.log(sortarr);
console.log(highest);
//output:
//array[3]
//0:900
//1:700
//2:450