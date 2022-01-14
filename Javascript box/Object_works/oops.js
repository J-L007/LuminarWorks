var baleno={
    name:"baleno",
    colors:["red","blue","white"],
    varients:["Petrol","diesel"],
    price:"8_lacs",
    manufacture:"Suzuki",
    getPrice(){
        return this.price
    }
}

var glanza={
    price:"9_lacs",
    manufacture:"toyoto"
}

glanza.__proto__=baleno
console.log(baleno.colors);