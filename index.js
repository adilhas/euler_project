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

console.log(sumArr());
//* task 1 END
