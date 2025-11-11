// const readline = require("readline-sync") uses before 2015

import readline from "readline-sync" // after 2015

let fName = readline .question("What is your name ? : ")

console.log(`My name is ${fName}`);

let age = readline .questionInt("What is your age ? : ")

if (age > 100){
    console.log("invalid age");
}else {
    console.log(age);
}

let email = readline .questionEMail("What is your email ? : ")

console.log(`My email is ${email}`);


let college = readline .question("What is your College name ? : ")

console.log(`My college name is ${college}`);