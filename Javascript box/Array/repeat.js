var pattern="ABACC"
let r=[]
for (let i of pattern){
    if(r.includes (i)){
        console.log(i,"recursive");
        break
    }
    else{
        r.push(i)
    }
}
