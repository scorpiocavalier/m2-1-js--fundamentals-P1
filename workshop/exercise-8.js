// Q8
// Write a program that will output the sum of all of the multiples of four
// between 0 and 5000

// ANSWER: the number you should see in the console is 3127500
let sum = 0;
for(let num = 0; num <= 5000; num = num + 4)
    sum += num;

console.log(sum);