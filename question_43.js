let fruits = [];
let fruit1 = new Map([["apple", 100], ["orange", 50], ["mango", 30]]);
let fruit2 = new Map([["apple", 200], ["orange", 250], ["mango", 230]]);
let fruit3 = new Map([["apple", 300], ["orange", 350], ["mango", 330]]);

fruits.push(fruit1);
fruits.push(fruit2);
fruits.push(fruit3);

let total = 0;
for (var fruit of fruits) {
  total += fruit.get("apple");  
}
console.log(total);
