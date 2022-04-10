let values = [1, 2, 3, 4, 5, 8, 9, 10, 18, 20];
let values2 = [1, 2, 3, 4, 5, 8, 10, 20];
  
let answer1 = multiple9(values);
let answer2 = multiple9(values2);

console.log(answer1);
console.log(answer2);

function multiple9 (values){
  let res = 0;
  for (let value of values) {
      if (value % 9 == 0) {
        res = value;
        break;
      }
  }
  
  return res;
}
