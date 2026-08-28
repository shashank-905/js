const textbox=document.getElementById("textbox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp=Number(textbox.value);
        temp=((9/5)*temp)+32;
        result.textContent=temp.toFixed(1)+"Fahrenheit";
    }
    else if(toCelsius.checked){
       temp=Number(textbox.value);
       temp=5/9(temp-32);
        result.textContent=temp.toFixed(1)+"Celsius";
    }
    else{
        result.textContent="select a unit";
    }
}