// 1. Student Attendance System
let presentStudents = ["Swathi", "Priya", "Swapna"];
let absentStudents = ["Anitha", "Srikanth"];
let finalStudents = [...presentStudents, ...absentStudents, "Sai"];
console.log("Final Student List:", finalStudents);
//output:Final Student List:
//0: "Swathi"
//1: "Priya"
//2: "Swapna"
//3: "Anitha"
//4: "Srikanth"
//5: "Sai"
//length: 6
//===============================

// 2. E-Commerce Cart
let mobile = {
  brand: "Samsung",
  model: "Galaxy S23",
  price: 60000
};
let charger = {
  type: "Fast Charger",
  price: 2000
};
let cart = { ...mobile, ...charger, deliveryDate: "2026-05-20" };
console.log("Final Cart:", cart);
//output:
//brand: "Samsung"
//deliveryDate: "2026-05=20"
//model:"Galaxy S23"
//Price: 2000
//type: "Fast Charger"
//===================================

// 3. Food Delivery App
function orderFood(...items) {
  console.log("Total items ordered:", items.length);
  console.log("First item:", items[0]);
  console.log("Last item:", items[items.length - 1]);
}
orderFood("Pizza", "Burger", "Pasta", "Ice Cream");
//output:total items ordered:4
//First item: Pizza
//Last item: Ice Cream
//===================================

// 4. Employee Salary Filter
let employees = [
  { name: "Swapna", salary: 45000 },
  { name: "Swathi", salary: 55000 },
  { name: "Anitha", salary: 70000 },
  { name: "Srikanth",salary: 30000 }
];
let highSalaryEmployees = employees.filter(emp => emp.salary > 50000);
console.log("Employees with salary above 50000:", highSalaryEmployees);
//output:Employees with salary above 50000:
//0: {name: 'Swathi',salary:55000}
//1: {name: 'Anitha',salary:70000}
//length: 2
//====================================

// 5. Online Game Score Board
let scores = [50, 80, 100, 70, 90];

let totalScore = scores.reduce((acc, curr) => acc + curr, 0);
console.log("Total Score of all players:", totalScore);
//output:Total Score of all players: 390