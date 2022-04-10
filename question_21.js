let numbers = [1, 12, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3];
let set1 = new Set(numbers);
let uniqNumbers = Array.from(set1);
uniqNumbers.sort(function(v1, v2) {
  return v2 - v1;
});

console.log(uniqNumbers);
