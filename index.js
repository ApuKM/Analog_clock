let hr= document.querySelectorAll(".hand")[0];
let min= document.querySelectorAll(".hand")[1];
let sec= document.querySelectorAll(".hand")[2];

function displayTime(){
    let date= new Date();

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotation = 30*hh+mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
    
   //Template literals
    hr.style.transform = `rotate(${hRotation}deg)`;
    // hr.style.transform = 'rotate(' + hRotation + 'deg)';
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime,1000);
