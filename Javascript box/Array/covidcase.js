var covid_data=[ 
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha", 25000,150,24000,9,5],
    [5,"ernamkulam", 70000,500,65000,9,5],
    [6,"thrissur", 65000,550,60000,8,7],
    [7,"iduky", 1000,50,9500,9,6]
]

// 1) highest case +ve case district
var h_case=covid_data.reduce((a,b)=>a[2]>b[2]?a:b)
console.log(h_case);

// 2) district with highest 1st dose vaccination rate 
var h_v_rate=covid_data.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(h_v_rate);

// 3) district with lowest death case
var l_d_case=covid_data.reduce((a,b)=>a[3]<b[3]?a:b)
console.log(l_d_case);

//  4) sort district with +ve cases
var p_sort=covid_data.sort((a,b)=>a[2]-b[2])
console.log(p_sort);

//  5) sort the district based on 1st dose
var f_d_sort=covid_data.sort((a,b)=>a[5]-b[5])
console.log(f_d_sort);

//  6) Is there any stae with +ve case >60000
var is_p_case=covid_data.some(a=>a[2]>60000)
console.log(is_p_case);

//  7) print thrissur details
var tr_details=covid_data.find(a=>a[1]=="thrissur")
console.log(tr_details);

//  8) total no: of +ve cases
var p_sum=0
covid_data.filter(a=>p_sum+=a[2])
console.log(p_sum);

//  9) total no: of cured case 
// var c_sum=0
// covid_data.filter(a=>c_sum+=a[4])
// console.log(c_sum);
var t_c_case=covid_data.map(a=>a[4]).reduce((b,c)=>b+c)
console.log(t_c_case);


//  10) cured no: of idukky
var id_c_case=covid_data.find(a=>a[1]=="iduky")
console.log(id_c_case[4]);

//  11) total no: of death case 
// var d_case=0
// covid_data.filter(a=>d_case+=a[3])
// console.log(d_case);
var t_d_case=covid_data.map(d=>d[3]).reduce((dc1,dc2)=>dc1+dc2)
console.log(t_d_case);