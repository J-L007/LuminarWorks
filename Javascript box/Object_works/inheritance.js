class parent{
    bike(){
        console.log("Passion pro");
    }
}


class child extends parent{
    bike(){
        super.bike()
        console.log("Harley");
    }

}
var ch=new child()
ch.bike()

// "this" used to refer current object
// "super()" used to refer parent
// "constructor" used to initialize instant variables
// "extends" used to inherit b/w classes
 