var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone", transactions:[{Credittransaction:[]},{Debittransaction:[]}]},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo", transactions:[{Credittransaction:[]},{Debittransaction:[]}]},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree", transactions:[{Credittransaction:[]},{Debittransaction:[]}]},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour", transactions:[{Credittransaction:[]},{Debittransaction:[]}]

}}

// 1- print details of 1000
// console.log(users[1000]);

// 2-1003 name
// console.log(users[1003].personName);

// 3-1005 exist or not
// console.log(1005 in users);

// function autnenticate(ac_no,password){
//     if(ac_no in users){
//         let pwd=users[ac_no].password
//         if(pwd==password){
//             return 1
//         }
//         else{
//             return -1
//         }
//     }
//     else{
//         return 0
//     }
// }
// console.log(autnenticate(1000,"userone"))

// 4-fund transfer
function validate_acno(acno){
    return acno in users?true:false
}

function fund_transfer(from_acno,to_acno,amount){
    if(validate_acno(from_acno) && validate_acno(to_acno)){
        let bal=users[from_acno].balance
        if(bal<amount){
            console.log("insufficient balance");
        }
        else{
            bal=bal-amount
            users[from_acno].balance=bal
            users[to_acno].balance+=amount
            let crtrans={from:from_acno,amount:amount}
            let dbtrans={to:to_acno,amount:amount}
            users[from_acno].transactions[1].Debittransaction.push(dbtrans)
            users[to_acno].transactions[0].Credittransaction.push(crtrans)
        }
    }
    else{
        console.log("account not found");
    }
}
fund_transfer(1001,1002,2000)
console.log(transactions[1])

// 5- balance enquiry
// function balance_enq(acno){ 
//     if(validate_acno(acno)){
//         return users[acno].balance
//     }
//     else{
//         console.log("account not found");
//     }
// }
//  console.log(balance_enq(1000));
