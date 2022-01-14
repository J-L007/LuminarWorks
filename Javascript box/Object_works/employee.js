var employee={
    eid:1001,
    name:"Aju",
    salary:120000,
    desg:"Developer", 
    exp:9
}
// console.log(employee.salary);
// employee.experience="fresher"
// console.log(employee);
// 'in' is used to check a property in a object(it return true or false)
if("exp" in employee){
    employee.exp+=1
}
else{
    employee.exp=1
}
console.log(employee);