// let username="sh awshank";
// let result=username.includes(" ");
// if(result){
//     console.log("username cannot include space ")
// }
// else {
//     console.log(username)
// }

// let phonenumber="77-95.227-845";
// phonenumber = phonenumber.replaceAll("-", "");
// phonenumber = phonenumber.replaceAll(".", "");
// console.log(phonenumber); 
//
// let username="shashank@gmail.com"
// let firstname=username.slice("0",username.indexOf("@"));
// let mail=username.slice(username.indexOf("@")+1);
// console.log(firstname);
// console.log(mail);

// method chaining
   let username=window.prompt("enter your username");
username=username.trim(" ");
let letter=username.charAt("0");
letter=letter.toUpperCase();

let remaningLetter=username.slice("1");
remaningLetter=remainingLetter.toLowerCase();

username=letter+remaningLetter;
console.log(username);

