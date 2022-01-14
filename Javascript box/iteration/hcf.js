var a = 12,
    b = 24,
    limit = 0;
let factor = 0;
if (a > b) {
    limit = b

} else {
    limit = a
}
for (i = 1; i <= limit; i++) {
    if ((a % i == 0) && (b % i == 0)) {
        factor = i

    }
}
console.log("hcf is", factor);
// avar num = 7;
// var flag = 0;
// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         flag = 1;
//         break;
//     }
// }
// console.log(flag == 0 ? "prime" : "not prime ");v