const clock =document.getElementById("clock");

setInterval(()=>{
    let d= new Date();
clock.innerHTML=d.toLocaleTimeString();

    
},1000);