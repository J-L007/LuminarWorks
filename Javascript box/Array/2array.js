var a=[10,11,20,21], b=[11,12,20,21]
var p=0,q=0
while(p<a.length&&q<b.length){
    if(a[p]==b[q]){
        console.log("common elements ",a[p]);
        p++
        q++
    }
    else if(a[p]<b[q]){
        p++
    }
    else if(a[p]>b[q]){
        q++
    }
}

// var a=[10,11,12,15,16]
// var number=1,flag=0
// for(let i of a){
//     if(number==i){
//         flag=1
//         console.log(`number exist`);
//     }  
// }
//     console.log(flag==0?"not found";"found");
// }

