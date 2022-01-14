 var ar=[2,3,4,5]
 var element=1, flag=0
 var low=0,upp=ar.length-1
 while(low<upp){
     let c_sum=ar[low]+ar[upp]
     if(element==c_sum){
         console.log(`pairs are (${ar[low]},${ar[upp]})`);
        flag++        
         low++
     }
     else if(c_sum<element){
         low++
     }
     else if(c_sum>element){
         upp--
     }
     
 }
 if(flag==0){
     console.log(`no Pairs are found`);
 }
// var flag=0
// for(let i of ar){
//     for(let j of ar){
//         if((i+j)==sum){
//             console.log(`Pairs are (${i},${j})`);
//             flag=1
//         }
//         // break
//     }
// }
// if(flag=0){
//     console.log(`no pairs`);
// }
