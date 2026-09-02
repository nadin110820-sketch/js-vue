// alert("hello")
// let age = 18;
// const name = "Nadiia";
// console.log(age);
// console.log(name);
// age = 19;

// const name = "Nadiia"
// let number = 0;
// let isTrue = False;

// console.log(typeof name); оператор який виводить тип даних

// + -
// * / %
// **

// const name = prompt("WHat is ypur name");
// let num1 = prompt("Type your first num");
// let num2 = prompt("Type your second num");
// console.log(Number(num1) + Number(num2));
// console.log((num1 - 0) + (num2 - 0));

// let num3 = 100;
// console.log(typeof String(num3))

let productName = prompt("Enter");
let priceName = Number(prompt("Enter"));
let quantity = Number(prompt("Enter"));
let delivery = Number(ptompt("Enter"));
let skidka = Number(prompt("Enter"));

let totalCost = price * quantity + delivery * (100 - skidka)/100;
console.log(`Total price ${productName} is ${totalCost} $`)
alert("Product: " + productName +
    "\nCost: " + totalCost)