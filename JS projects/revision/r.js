// let username;
// let password;
// document.getElementById("mySubmit").onclick=function(){
//     username=document.getElementById("myText").value;

//     password=document.getElementById("myText").value;
//     console.log("logged in sucsefully")
//     document.getElementById("myH1").textContent=`Hello ${username}`

// }
// let circumference;
// let radius;
// let pi=3.144;
// document.getElementById("mySubmit").onclick=function(){
//    radius= document.getElementById("myText").value;
//     pi=Number(pi);
//     radius=Number(radius);
//     circumference=2*pi*radius;
//     circumference=Number(circumference);
//     console.log(circumference);
//     document.getElementById("myH1").textContent=`circumference of the circle is ${circumference}`;
// .textContent=circumference;
// }.textContent=``

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtnBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;
// decreaseBtn.onclick = function () {
//      count--;
//     countLabel.textContent = count;
// }
// increaseBtn.onclick = function () {
//      count++;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function () {
//     count = 0;
//     countLabel.textContent = count;
// }

// const myButton=document.getElementById("myButton");
// const myLabel1=document.getElementById("myLabel1");
// const myLabel2=document.getElementById("myLabel2");
// const myLabel3=document.getElementById("myLabel3");
// const max=6;
// const min=1;
// let randomnumber1;
// let randomnumber2;
// let randomnumber3;
// myButton.onclick=function(){
// randomnumber1=Math.floor(Math.random()*max)+min;
// randomnumber2=Math.floor(Math.random()*max)+min;
// randomnumber3=Math.floor(Math.random()*max)+min;
// myLabel1.textContent=randomnumber1;
// myLabel2.textContent=randomnumber2;
// myLabel3.textContent=randomnumber3;
// }

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const playpalBtn = document.getElementById("playpalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
    if (myCheckbox.checked) {
        subResult.textContent = `u are subscribed!`
    }
    else {
        subResult.textContent = `u are NOT subscribed!`
    };
    if (visaBtn.checked) {
        paymentResult.textContent = `u are paying through visa`
    }
    else if (mastercardBtn.checked) {
        paymentResult.textContent = `u are paying through mastercard`
    }
    else if (playpalBtn.checked) {
        paymentResult.textContent = `u are paying through playpal`
    }
    else {
        paymentResult.textContent = `please pay the payment`
    }
}