// spread operator is use to iterable such as an arry and string to be expanded into separetor eliments

// let num=[1,2,3,4,5,6];
// console.log(...num.join("-"));

// we can combine arrays also using this spread operator

// let num1=[1,2,3,4,5];
// let num2=[6,7,8,9,0];
// let number=[...num1,...num2,];
// console.log(number);

 // (...rest_operator)=bundels the elements into an array 

 /*function getNum(...nums){
    console.log(nums);
 }
 function numbers(...nums){
    return nums;
 }
 

  num1=3;
  num2=2;
  num3=1;
  num4=6;
  num5=9;

//getNum(num1,num2,num3,num4,num5);
 const numbr=numbers(num1,num2,num3,num4,num5);
 console.log(numbr);*/

/*function sum(...numbers){
    let result=0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
function avarage(...numbers){
    let result=0;
    for(let  number of numbers){
    result+= number;
}
   return result/numbers.length;
}
const total=avarage(1,2,4,5,6,7,8);
console.log(`yours avg is ${total.toFixed(2)}`);*/

function combineStrings(...string){
    return string.join(" ");
   
}

const fullname=combineStrings("hii","name","shashank");

console.log(fullname);