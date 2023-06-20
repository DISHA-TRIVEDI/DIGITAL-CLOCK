setInterval(()=>{
let a= new Date();
let date= a.getDate();
let month= a.getMonth()+1;
let year= a.getFullYear();
let hour= a.getHours();
let min= a.getMinutes();
let sec= a.getSeconds();
let ampm= document.getElementById("AMPM")
  
  if(hour<10){
    hour="0"+hour;
  }
  if(min<10){
    min="0"+min;
  }
  if(sec<10){
    sec="0"+sec;
  }
  if(hour>=12){
    ampm.innerHTML= "PM"; 
  }
  if(hour<12 || hour==00){
    ampm.innerHTML= "AM";
  }

document.getElementById("hours").innerHTML= hour
document.getElementById("mins").innerHTML= min
document.getElementById("secs").innerHTML= sec
document.getElementById("date").innerHTML= date
document.getElementById("month").innerHTML= month
document.getElementById("year").innerHTML= year
 

},1000)  

