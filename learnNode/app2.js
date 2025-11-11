import readline from "readline-sync"

let fName = readline.question("Enter Your Name : ") 
let age = readline.question("Enter Your Age : ")
let likes = readline.question("Do you like coding? [y/n] : ") 

console.log(`Name: ${fName}`);
console.log(`Age: ${age}`);

if(likes == "y" || likes == "Y" || likes == "Yes" || likes == "yes"){
    console.log(`likes coding: Yes`);
}else{
    console.log(`likes coding: No`);
}