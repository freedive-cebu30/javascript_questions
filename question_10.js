console.log(cal(3));
console.log(cal(4));


function cal(number) {
  let stringNumber = number.toString();
  let threeTimesNumber = stringNumber.repeat(3);
  let intNumber = parseInt(threeTimesNumber);

  return number + intNumber;
}
