// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null); //object
let x = 4;
x += 5; //arithmetic
console.log(x);
console.log(typeof x);
let r = x + " ";
console.log(typeof r, typeof x);
x += 2;
console.log(x);
let y = "5";
console.log(typeof y);
let z = parseInt("123 Preethu"); //print integer only ---- parseInt
console.log(z, typeof z); //its type --- number
console.log(Boolean(""));
//object
// let input = "name";
let a = {
  name: "preethu",
  course: "java",
  Exp: 0,
};
console.log(a);
console.log(a["name"]);
// console.log(a[input]);
// complex object
let p = {
  name: "abi",
  course: "js",
  laptop: {
    brand: "acer",
    ram: 4,
    cpu: "i3",
  },
};
console.log(p.course);
//for in loop
for (let key in p.laptop) {
  console.log(key, p.laptop[key]);
}
for (let keys in p) {
  console.log(keys, p[keys]);
}



//delete key
delete p.laptop;
console.log(p);
//for of loop
// let nums = [5, 25, 55];
// nums[0] = 1;
// nums[99] = 100;
// for (let n of nums) {
//   console.log(n);
// }
