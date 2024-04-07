#! /usr/bin/env node
import inquirer from 'inquirer';

let currency: any = {
    USD: 1, // Base Currency || US Dollar
    PKR: 280,//Pakistani Rupee
    INR: 84,//Indian rupee
    EUR: 0.92,//Euro
    SOM: 89.34, //Kyrgystani Som
    DINAR: 0.31 //Kuwaiti Dinar
};

let user_answer = await inquirer.prompt(
    [
        {
            name: 'from',
            message: 'Enter from currency',
            type: 'list',
            choices: ['USD', 'PKR', 'INR', 'EUR', 'SOM', 'DINAR']
        },
        {
            name: 'to',
            message: 'Enter to currency',
            type: 'list',
            choices: ['USD', 'PKR', 'INR', 'EUR', 'SOM', 'DINAR']
        },
        {
            name: 'amount',
            message: 'Enter amount to convert',
            type: 'number'
        }
    ]
)

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);