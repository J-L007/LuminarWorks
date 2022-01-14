class Bank{
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }
    session={}


    validateacno(acno){
        return acno in this.accounts?true:false
    }

    authenticate(acno,password){
        if(this.validateacno(acno)){
            let pwd=this.accounts[acno].password
            if(password==pwd){
                console.log("Access granted");
                this.session["users"]=acno
            }
            else{
                console.log("incorrect password");
            }
        }
        else{
            console.log("invalid account number");
        }
    }
    getBalance(acno){
        return this.accounts[acno].balance
    }
    balanceenquiry(){
        if("users" in this.session){
            let logeduser=this.session["users"]
            console.log(this.getBalance(logeduser));

        }
        else{
            console.log("Login first");
        }
    }
    loginrequired(){
        return "users" in this.session?true:false
    }
    loggeduser(){
        if(this.loginrequired){
            return this.session["users"]
        }
    }
    fundtransfer(to_acno,amount){
        if(this.loginrequired()){
            let loggeduser=this.session["users"]
            if(this.validateacno(to_acno)){
                let curbal=this.getBalance(loggeduser)
                if(amount>curbal){
                    console.log("Insufficient balance");
                }
                else{

                }
            }
            else{
                console.log("invalid account");
            }
        }
        else{
            console.log("login First");
        }
    }
    getCreditTransaction(){
        user=this.loggeduser()
        this.accounts[user].transactions.creditTransactions.forEach(t=>console.log(t))
    }
    getDebitTransaction(){
        user=this.loggeduser
        this.accounts[user].transactions.debitTransactions.forEach(t=>console.log(t))
    } 
    getTransactionHistory(){
        user=this.loggeduser
        console.log(this.accounts[user].transactions);
    }


}
  


var bank=new Bank
// console.log(bank.validateacno(1000));
// bank.authenticate(1000,"userone")
bank.balanceenquiry()
