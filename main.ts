#! /usr/bin/env /node

import inquirer from "inquirer";

let myBalance = 10000; //dollar
let myPin = 4567;
let pinAnswer = await inquirer.prompt(
    [
        { 
            name: "pin", message: "entre your pin number:",
             type: "number"
        }
    ]
);
if(pinAnswer.pin===myPin){
    console.log("correct pin code!!!")
 let operationAns=await inquirer.prompt(
    [
        {
            name:"operation",
            message:"please select option",
            type:"list",
            choices:["withdraw","check balance","fast cash"]
        }
    ]
);
if(operationAns.operation==="withdraw"){
    let amountAns = await inquirer.prompt(
    [
        {
         name:"amount",
         message:"entre your amount to withdraw",
         type:"number"
        }
    ]
);
myBalance-=amountAns.amount;
//console.log("your remaining balance is: " + myBalance)---> concetination
console.log(`your remaining is :  ${myBalance}`) // ---->template litrals
}else if(operationAns.operation<=myBalance){
console.log("your balance is insufficient")
}
else if(operationAns.operation==="check balance"){
//console.log("your balance is: "+ myBalance)    ---> concetination
    console.log(`yorr balance is: ${myBalance}`) // ----> template literals
}

else if (operationAns.operation==="fast cash"){
     let fastAns = await inquirer.prompt([
        {
            name:"fastOption",
            message:"select one of them",
            type:"list",
            choices:["1000","3000","5000","7000","10000"],
        }
     ]);
     myBalance = myBalance - fastAns.fastOption}
     console.log(`your updated balance is:${myBalance}`);


}else{
      console.log("incorrect pin number")
    }

