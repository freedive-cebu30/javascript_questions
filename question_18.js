let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxValue = 0;
  
// forを使った方法
// the way of for
for (let num of array1) {
  if (maxValue < num) {
    maxValue = num;
  }
}
console.log(maxValue);

// reduceを使った方法
// the way of reduce
let m = Math.max(...array1);
console.log(maxValue);
