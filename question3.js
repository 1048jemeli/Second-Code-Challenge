//an array of numbers from 1 to 10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNums = getPrimes(numbers)
//check if a number is prime
function checkNumber(number) {
//if a number is less than 1, it is not a prime number
    if (number <= 1){
    return false
  }
  //if number is equal to 2, it is a prime number
  if (number === 2){
    return true
  }
  for (let i = 2; i <= Math.sqrt(number); i++){
    if (number % i === 0){
      return false
    }
  }
  return true
}

function getPrimes(array) {
  let prime= [];
  for (let j= 0; j < array.length; j++){
    if (checkNumber(array[j])){
      prime.push(array[j])
    }
  }
//gives array of numbers that are prime
  return prime
}
console.log(primeNums)