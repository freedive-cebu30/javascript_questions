console.log(calAbs(10, 5));
console.log(calAbs(10, 13));
// 5
// 3


function calAbs(number1, number2) {
  let answer = number1 - number2;
  answer = answer < 0 ? Math.abs(answer) : answer;

  return answer;
}
