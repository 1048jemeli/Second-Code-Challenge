//define the inputString
let inputString = "The Quick Brown Fox"
function swapCase(inputString) {
    let result = ''
//iterate through each string
    for (let i = 0; i < inputString.length; i++) {

        let char = inputString[i]

        if (char === char.toUpperCase()) {
            result += char.toLowerCase()
//if its uppercase, it is changed to lowercase
        } else {
            result += char.toUpperCase()
//if its lowercase, it is changed to uppercase
        }
    }
    return result;
}
//print the result after calling it
console.log(swapCase(inputString))