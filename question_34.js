let listBox1 = [1, 2, 3, 4, 5, 8, 9];
let listBox2 = [9, 7, 6, 5, 4];
  
let set1 = new Set(listBox1);
let set2 = new Set(listBox2);
  
let answer = symmetricDifference(set1, set2);

console.log(answer);
console.log(Array.from(answer));

function symmetricDifference(setA, setB) {
  for (let value of setB) {
    if (setA.has(value)) {
      setA.delete(value)
    } else {
      setA.add(value)
    }
  }
  return setA
}
