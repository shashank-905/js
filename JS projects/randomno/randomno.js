const myButton=document.getElementById("myButton");
const label1=document.getElementById("label1");
const label2=document.getElementById("label2");
const label3=document.getElementById("label3");
const max=6;
const min=1;
 let randomNo1;
 let randomNo2;
 let randomNo3;
myButton.onclick=function(){
    randomNo1=Math.floor(Math.random()*max)+min;
    randomNo2=Math.floor(Math.random()*max)+min;
    randomNo3=Math.floor(Math.random()*max)+min;
    label1.textContent=randomNo1;
    label2.textContent=randomNo2;
    label3.textContent=randomNo3;
    
}
