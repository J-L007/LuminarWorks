var alp="ABABBC"
var wc={}
var op=[]
// alp.split("").map(char=>char in wc?op.push(char):wc[char]=1)
Array.from(alp).map(char=>char in wc?op.push(char):wc[char]=1)
console.log(op[0]);
// for(let char of alp){
//     if(char in wc){
//         console.log("first recursive character is",char);
//         break
//     }
//     else{
//         wc[char]=1
//     }
// }
