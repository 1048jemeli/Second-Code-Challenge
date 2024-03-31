function ArrayGenerator(start, end) {
//calculates the length of array


    const length = Math.abs(end - start) + 1
//returns the direction of the array

    const direction = start < end ? 1 : -1;
    return Array.from({ length }, (_, index) => start + index * direction)
  }

let start = -4
let end = 7




console.log(ArrayGenerator(start, end))