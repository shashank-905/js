let age;
let x="you are eligible for this site"
let y="something went wrong"
document.getElementById("myButton").onclick=function(){
    age=document.getElementById("myText").value
if (age>=18){
    console.log("you are eligible for this site");
    document.getElementById("myH3").textContent=x;
}else{
    console.log("something went wrong");
    document.getElementById("myH3").textContent=y;
}
}
