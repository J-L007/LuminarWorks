var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],

]
// 1)print name of employees
// for(let employee of employees){
//     console.log(employee[1]);
// }

// 2)print details of employees works in developer
// for( let employee of employees){
//     if(employee[3]=="developer"){
//         console.log(employee);
//     }
// }
  
// 3) print experience of employees
// for( let employee of employees){
//      console.log(employee[5]-employee[4]);
// }

// // 4)print employee datails who having experience >10
// for(let emp of employees){
//     if((emp[5]-emp[4])>17){
//         console.log(emp);
//     }
// }

// 5) highest salary
// var h_salary=0
// for(employee of employees){
//     if(employee[2]>h_salary){
//         h_salary=employee[2]
//     }
// }
// console.log(h_salary);

// 6) highest second salary
//     employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[1][2]);

// 7) minimum salary
// employees.sort((e1,e2)=>e1[2]-e2[2])
// console.log(employees[0][2]);

// 8) no: of employees
    // console.log(employees.length);

// 9) highest salary among developers
//  var d_details=[]
// for(let employee of employees)  {
//     if(employee[3]=="developer"){
//         d_details.push(employee)
//     }
// }
// d_details.sort((d1,d2)=>d2[2]-d1[2])
// console.log(d_details[0][1]);

// 10)print details of employees whose name start with a
// for(let employee of employees){
//     if(employee[1][0]=="A" || employee[1][0]=="a"){
//         console.log(employee);
//     }
// } 

//  11) print details of employees who work im the period of 2010-15
for(let employee of employees){
    if(employee[4]>2009 && employee[5]<2016){
        console.log(employee);
    }
}