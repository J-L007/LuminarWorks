var a=18,b=15,c=19
if((a>b)&&(a>c)){
    if(b>c){
        console.log(`${b} is second largest`);
    }
    else{
        console.log(`${c} is second largest`);

    }
    // console.log(`${a} is largest`);
} 
if((b>a)&&(b>c)){
    if(a>c){
        console.log(`${a} is second largest`);

    }
    else{
        console.log(`${c} is second largest`);

    }
    // console.log(`${b} is largest`);

}
if((c>a)&&(c>b)){
    if(a>b){
        console.log(`${a} is second largest`);

    }
    else{
        console.log(`${b} is second largest`);

    }
    // console.log(`${c} is largest`);

}
else{
    console.log("numbers are equal");
}