//* task 1 START
function getMultiples() {
  let mulOfThreeAndFive = [];
  for (let i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      mulOfThreeAndFive.push(i);
    }
  }
  return mulOfThreeAndFive;
}

function sumArr() {
  let numbers = getMultiples();
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

// console.log(sumArr());
//* task 1 END

//*task 2 START
function getFibonacciSequence() {
  let fibonacciSequence = [1, 2];
  let lastElement = fibonacciSequence[fibonacciSequence.length - 1];
  let secLastElement = fibonacciSequence[fibonacciSequence.length - 2];
  let result = lastElement + secLastElement;
  //   for (let i = 1; fibonacciSequence.length==10;i++){

  // }
  return result;
}
console.log(getFibonacciSequence());
//*task 2 END
