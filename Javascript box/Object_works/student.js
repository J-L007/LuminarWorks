class student{
    // setStd(name,age,gender)
    constructor(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
      
    }
    printstd(){
        console.log(this.name,this.age,this.gender);
    }
}
var std1=new student("anu",18,"male")
// std1.setStd("anu",19,"male")
std1.printstd()

var std2=new student("ammu",18,"female")
// std2.setStd("ammu",18,"female")
std2.printstd()