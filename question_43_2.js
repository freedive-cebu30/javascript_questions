let fruits = [ { "apple" : 100, "orange" : 50, "mango" : 30},
               { "apple" : 200, "orange" : 250, "mango" : 230},
               { "apple" : 300, "orange" : 350, "mango" : 330},
             ];

let total = 0;
for (var fruit of fruits) {
  total += fruit["apple"];  
}
console.log(total);
