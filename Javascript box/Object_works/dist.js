var db=[
    {district:"palakkad",temperature:30},
    {district:"tvm",temperature:31},
    {district:"palakkad",temperature:31},
    {district:"tvm",temperature:29},
    {district:"ekm",temperature:28},
    {district:"ekm",temperature:31},

]
var weather_data={}
for(let dist of db){
    let d_name=dist.district
    let d_temp=dist.temperature
    if(d_name in weather_data){
        let old_temp=weather_data[d_name]
        if(temp>old_temp){
            weather_data[dist]=temp
        }
    }

    else{
        weather_data[d_name]=temp
    }
}
console.log(weather_data);