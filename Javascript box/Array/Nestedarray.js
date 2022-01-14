var students=[
    [1000,"akhil","mearnstack",145,"mca"],
    [1001,"anu","mearnstack",165,"bca"],
    [1002,"nikhil","django",175,"bca"],
    [1003,"vijil","django",165,"mca"],
    [1004,"tim","testing",185,"bca"],
    [1005,"jhon","testing",155,"mca"],


]
// 1) print student name and mark
// for(let student of students){
//     console.log(student[1],student[3]);
// }

// 2) print mearnstack batch student details
// for(let student of students){
//     if(student[2]=="mearnstack"){
//         console.log(student);
//     }
// }

// 3)print deatails of student whose mark are above 160
// for(let student of students){
//     if(student[3]>160){
//         console.log(student);
//     }
// } 

//  4) print django batch student whose mark >160
//  for(let student of students){
//      if(student[2]=="django" && student[3]>170){ 
//         console.log(student);
//      }
//  }

//  5) print highest mark
var max_mark=0
 for(let student of students){
     if(student[3]>max_mark){
         max_mark=student[3]
     }
 }
 console.log(max_mark);