// map()
// return values without condition 
// var employees=["AR","SNR","MD","JL"]
// var add=employees.map(emp=>"Mr."+ emp)
// var low=employees.map(emp=>emp.toLowerCase())
// console.log(add);
"----------------------------------------------------------------"
// filter()
// to find values with conditions
// var a=[2,12,34,15,19,11,4,6]
// var even=a.filter(num=>num%2==0)
// console.log(even);
// var name1=["aju","suneer","amjad","fuadu","arshad"]
// var a_start=name1.filter(name=>name[0]=="a")
// console.log(a_start);
"----------------------------------------------------------------"
// reduce()
// return only one value even it come multiple times.
// var a=[2,3,4,5,6,7,8,9]
// var sum=a.reduce((a,b)=>a+b)
// console.log(sum);
// var max=a.reduce((a,b)=>a>b?a:b)
// console.log(max);
"----------------------------------------------------------------"
// sort()
// return sorted value in ascending or descending
"----------------------------------------------------------------"
// some()
// return true or false value.
// var a=[12,334,121,45,46,76,87,9]
// var num=a.some(b=>b==91)
// console.log(num);
"----------------------------------------------------------------"
// find()
// return only one values, use in unique id cases
var a=[1,2,3,4,5,5,6,4]
var repeat=a.find(b=>b==4)
console.log(repeat);
// return 
// forEach()