// Write a JavaScript function that accepts two numbers to generate an array between them. 
//For example, if the two numbers are 4 and 7, 
//the output should be [4, 5, 6, 7] and -4 and 7 
//should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].

function generateArray(num1,num2) {
    let results = [];
    for (let i = num1; i <= num2; i++) {
        results.push(i);
    }
    return results;
}

let num1 = 3;
let num2 = 8;
console.log(generateArray(num1,num2));
