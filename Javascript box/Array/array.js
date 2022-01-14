var salary = [2, 3, 4, 5, 6, 6, 7, 7, 7]
salary[3] = 9
// for(let amount of salary){
//     console.log(amount);
// }
// for(let i=0;i<salary.length;i++){
//     console.log(i);
// }
for(let amount of salary){
    if(amount>3){
        console.log(amount);
    }
}