var mul = (a, b) => a * b
console.log(mul(10, 2));
var sub = (a, b) => a - b
console.log(sub(10, 6));
var sqr = (a) => a ** 2
console.log(sqr(2));
var evn = (a) => a % 2 == 0 ? true : false
console.log(evn(9));
var smartSub = (a, b) => a > b ? a - b : b - a
console.log(smartSub(4, 9));
var isStartwithA = (names) => names[0] == "a" || names[0] == "A" ? true : false
console.log(isStartwithA("Anu"));
var vdPhone = (ph) => ph.length != 10 ? false : true
console.log(vdPhone("1276746873"));
var lar = (a, b) => a > b ? a : b
console.log(lar(8, 9));