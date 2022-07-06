function greet() {
  console.log("Hello");
}
greet();
//return
function intro() {
  return "Hello everyone!!";
}
// let s = intro();
// console.log(s);
console.log(intro());
//passing arg
function arg(user) {
  return `Hello ${user}!!`;
}
// let user = "preethu";
// let str = arg(user);
// console.log(str);
console.log(arg("preethu"));
//Expressions---evaluation----assigned
// let a = function (n1, n2) {
//   return n1 + n2;
// };
// let sum = a;
// let r = sum(4, 5);
// console.log(r);
function a(n1, n2) {
  return n1 + n2;
}
console.log(a(4, 5));
//local variable
// function greet(user) {
//   return `Hello ${user}`;
//   console.log(u);
// }
// let u = "preethu";
// let str = greet(u);
// console.log(str);
//global variable
let user = "preethu";
function g(u) {
  console.log(user);
  return `hello ${u}`;
}
let str = g(user);
console.log(str);
//default
function add(num1, num2, num3 = 3) {
  //default num3 = 3
  console.log(num1, num2, num3);
  return num1 + num2 + num3;
}
// let r = add(5, 6, 3); //3 values are assigned
let r = add(5, 6);
console.log(r);
//Arrow function ------ '=>'
//without parameters
let d = () => {
  console.log("Hai");
  return 2;
};
console.log(d());
//with parameters
let e = (f) => {
  console.log("hai " + f);
  return 1;
};
console.log(e("Preeths"));
//with return
let x1 = (num1, num2, num3) => {
  return num1 + num2 + num3;
};
console.log(x1(5, 6, 9));
//directly return
let x = (num1, num2, num3) => num1 + num2 + num3;
console.log(x(5, 6, 2));
//Methods----object + function
let lap = {
  cpu: "i3",
  ram: 4,
  brand: "acer",
  greet: function () {
    console.log("Hello Dear !");
  },
};
lap.greet();
//this keyword
let lap1 = {
  cpu: "i3",
  ram: 4,
  brand: "acer",
  getconfig: function () {
    console.log(this.cpu);
  },
};
lap1.getconfig();
let lap2 = {
  cpu: "i5",
  ram: 8,
  brand: "asus",
  getconfig: () => {
    console.log(lap2.cpu);
  },
};
lap2.getconfig();
//constructor
 function A (name,tech){
  
 }