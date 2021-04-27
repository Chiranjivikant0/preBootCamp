const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 

    var num1= userInput[0];
    var num2= userInput[1];
    if(num1<num2) console.log(num1);
    else
    {
        console.log(+num1 % +num2);
    }
//end-here
});

/*
Question 1:

Given two positive integers num1 and num2, the task is to find the remainder when num1 is divided by num2.

Example 1:

Input:
num1 = 5
num2 = 3

Output:
2

Explanation:
The remainder after dividing 5 by 3 is: 2.

Example 2:

Input:
num1 = 5
num2 = 10

Output:
5

Explanation:
5 cannot be divided by 10 so it is 
the Remainder.


*/