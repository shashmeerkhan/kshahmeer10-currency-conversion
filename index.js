#! /usr/bin/env node
import inquirer from "inquirer";
//currency_conversion object
let currency_conversion = {
    PKR: {
        USD: 0.0036,
        GBP: 0.0028,
        PKR: 1,
    },
    GBP: {
        USD: 1.26,
        GBP: 1,
        PKR: 350.59,
    },
    USD: {
        USD: 1,
        GBP: 0.79,
        PKR: 277.54,
    },
};
//prompt user for input
const answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "please select your currency",
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "list",
        name: "to",
        message: "select your conversion rate",
        choices: ["PKR", "GBP", "USD"],
    }, {
        type: "number",
        name: "amount",
        message: "please enter the amount you want to convert",
    }
]);
//destructuring  user input
const { from, to, amount } = answer;
//calculate the conversion rate
if (from && to && amount) {
    let result = currency_conversion[from][to] * amount;
    console.log(`your conversion rate ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid conversion");
}
