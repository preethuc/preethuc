//variable declaration-----let
let c = 8 + 2;
//print---console.log
console.log(c);
c = 4 + 4;
console.log(c);
//string-----""
let userName = "preetha";
console.log(userName);
//functions passing arguments
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(1, 2);
console.log(appleJuice);
//constant variables
let radius = 6;
const pi = 3.14;
let area;
radius = 3;
area = pi * radius * radius;
console.log(area);
//datatypes
//numbers
let n = 2.11234;
console.log(n);
n = 0xf; //hexadecimal value
console.log(n);
n = 1_00_000;
console.log(n);
n = 10000000000000000001n;
console.log(n);
console.log(Number.MAX_VALUE * 10);
console.log(Number.MIN_VALUE * 5);
n = 0xff;
console.log(n);
n = 1.5e10;
console.log(n);
n = 5 / 0;
console.log(n);
n = -5 / 0;
console.log(n);
//string
let firstName = "Preetha";
let lastName = "Chelladurai";
console.log(firstName + " " + lastName);
let myName = 'My name is "preethu"';
console.log(myName);
myName = "Preetha\nChelladurai";
console.log(myName);
myName = "Preetha\tChelladurai";
console.log(myName);
//Boolean
let bool = 5 < 6;
console.log(bool);
console.log(typeof bool);
//null
let user = null;
console.log(typeof user, user);
