var arr=[4,6,7,8,9]
var sum=0
var dup=[]

for(let amount of arr){
    sum+=amount
}
for(let amount of arr){
    // temp=amount
    dup.push(sum-amount)
}
console.log(dup);

// sum=0
// ar2=[]
// for(let i of ar1){
//     sum+=i
// }
// // console.log(sum);
// for(let i of ar1){
//     let i=0
//     ar2.push(sum-=ar1[i])
// }
// console.log(ar2);
