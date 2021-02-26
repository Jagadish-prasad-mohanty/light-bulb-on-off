const LightOn=document.querySelector("#LightOn");
const LightOff=document.querySelector("#LightOff");
const imgOn=document.querySelector("#imgOn");
const imgOff=document.querySelector("#imgOff");

let light=0;

LightOn.addEventListener('click',()=>{
    if(light===0){
        light=1;
        imgOn.style.display='block';
        imgOff.style.display='none';
    }
})
LightOff.addEventListener('click',()=>{
    if(light===1){
        light=0;
        imgOn.style.display='none';
        imgOff.style.display='block';
    }
})