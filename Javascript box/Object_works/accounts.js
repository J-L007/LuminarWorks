var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
// let no_acc=accounts.length
// console.log(no_acc);

// 2- print all savings account
// accounts.filter(data=>data.ac_type=="savings").forEach(ac=>console.log(ac.acno))

// 3- print balance of acno=1000
// let ac_bal=accounts.find(data=>data.acno==1000).balance
// console.log(ac_bal); 

// 4-print details of accounts that used gpay transfer
// accounts.map(data=>data.transactions).flat().filter(ac=>ac.method=="g-pay").forEach(dat=>console.log(dat))

// 5-print credit transacton of 1002
// accounts.map(data=>data.transactions).flat().filter(ac=>ac.to==1002).forEach(acc=>console.log(acc))

// 6-print highest balance account details
// var max_bal=accounts.sort((a,b)=>b.balance-a.balance)[0]
// console.log(max_bal);

// 7-transaction history of 1002
var dr_tr=accounts.find(dat=>dat.acno==1002).transactions
var cr_tr=accounts.map(data=>data.transactions).flat().filter(acc=>acc.to==1002)

var history={"Debit transaction":dr_tr,"Credit transaction":cr_tr}
console.log(history);
