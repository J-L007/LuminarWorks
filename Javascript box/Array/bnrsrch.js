var a=[12,3,4,5,13,14,10,8,7]
a.sort((i,j)=>i-j)
console.log(a);
var element=9, flag=0
var low=0,upp=a.length-1
while(low<upp){
    let mid=Math.floor((low+upp)/2)
    if(element==a[mid]){
        flag=1
        break
    }
    else if(element<a[mid]){
        upp=mid-1
    }
    else if(element>a[mid]){
        low=mid+1
    }
}
    console.log(flag==0?"not found":"found");
