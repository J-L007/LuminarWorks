var expenses=[20000,25000,70000,40000,80000]
// let min=expenses[0]

// for(let amount of expenses){
//     sum+=amount
//     console.log(sum);
// }
// for(let amount of expenses){
//     if(amount>max)
//     max=amount
// }

//     console.log(max);
// for(let amount of expenses){
//     if(min>amount){
//         min=amount
        
//     }
// }
// console.log(min);
var unique=[]
for(let amount of expenses){
    if(unique.includes(amount)){

    }
    else{
        unique.push(amount)
    }
}
console.log(unique)