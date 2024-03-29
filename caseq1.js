function swapCase(str) { //function definition
    return str.replace(/./g, function(char) {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    });
}


let inputString = "The Quick Brown Fox"; // string to be swapped
// let Output = "I Am A Girl"; // string to be swapped
// let OutputString = swapCase(Output); 
let swappedString = swapCase(inputString);
console.log(swappedString); // Output: tHE qUICK bROWN fOX
// console.log(OutputString); // output: i aM a gIRL