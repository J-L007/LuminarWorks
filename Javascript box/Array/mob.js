var mobiles=[
    [1000,"samsung","samsung f41", 15000,"snapdragon","Amoled","4g"],
    [1001,"samsung","samsung a51", 32000,"snapdragon","Amoled","5g"],
    [1002,"redmi","note 10 pro", 19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite", 30000,"mediatek","LED","4g"],
    [1004,"apple","12 pro", 72000,"snapdragon","Amoled","4g"],
    [1005,"apple","12 pro max", 100000,"snapdragon","Amoled","5g"],
    [1006,"one plus","nord 2", 29000,"snapdragon","Amoled","4g"],
    [1007,"one plus","nord 2", 15000,"mediatek","LED","4g"]

]

// var mob_names=mobiles.map(mob=>mob[2])
// console.log(mob_names);
"----------------------------------------------------------------"
// var mob_price=mobiles.map(mob=>mob[3])
// console.log(mob_price);
"----------------------------------------------------------------"
// var s_mobiles=mobiles.filter(name=>name[1]=="samsung")
// console.log(s_mobiles);
"----------------------------------------------------------------"
// var u25k=mobiles.filter(mob=>mob[3]<25000).map(mob=>[mob[2],mob[3]])
// console.log(u25k);
"----------------------------------------------------------------"
// var u25k_u30k=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000)
// console.log(u25k_u30k);
"----------------------------------------------------------------"
// var _5g_mob=mobiles.filter(mob=>mob[6]=="5g").map(mob=>mob[2])
// console.log(_5g_mob);
"----------------------------------------------------------------"
// var u25k_5g=mobiles.filter(mob=>mob[6]=="5g" && mob[3]<25000)
// console.log(u25k_5g);
"----------------------------------------------------------------"
// var sam_4g=mobiles.filter(mob=>mob[1]=="samsung" && mob[5]=="Amoled" && mob[6]=="4g")
// console.log(sam_4g);
"----------------------------------------------------------------"
// var high=mobiles.reduce((a,b)=>a[3]>b[3]?a:b)
// console.log(high);
"----------------------------------------------------------------"
// var low=mobiles.reduce((a,b)=>a[3]<b[3]?a:b)
// console.log(low);
"----------------------------------------------------------------"
var u10k_u20k=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=20000)
console.log(u10k_u20k);

// console.log(mobiles);
// 1) list all 5g mobiles
// for(let mob of mobiles){
//     if(mob[6]=="5g"){
//         console.log(mob[2]);
//     }
// }

//2) highest cost phone 
// let h_rate=0
// for(let mob of mobiles){
//     if(mob[3]>h_rate){
//         h_rate=mob[3]
//     }
// }
// console.log(h_rate);

//        or 

// mobiles.sort((m1,m2)=>m2[3]-m1[3])
// console.log(mobiles[0][3]);

// 3)list snapdragon mobiles
// for(let mob of mobiles){
//     if(mob[4]=="snapdragon"){
//         console.log(mob[2]);
//     }
// }

// 4) print mobile greater 30000 
// for(let mob of mobiles){
//     if(mob[3]>30000){
//         console.log(mob[2]);
//     }
// }