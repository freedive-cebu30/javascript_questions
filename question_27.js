let values = [1, "a", 2, "b", "c", 3];
let intArray = [];
let stringArray = [];
  
// どちらのやり方でも大丈夫です
// either way is fine

for (let value of values) {
  if (typeof(value) === "number") {
    intArray.push(value);
  } else if (typeof(value) === "string") {
    stringArray.push(value);
  }
}

console.log(intArray);
// [1, 2, 3]
console.log(stringArray);
// [a, b, c]


let val = values.filter((value) => typeof(value) === "number");
console.log(val);
// [1, 2, 3]
