let values = [1, 2, 3, 4, 5, 8, 9, 10, 18, 20];
let values2 = [1, 2, 3, 4, 5, 8, 10, 20];
  
answer1 = values.some((value) => value % 9 == 0 );
console.log(answer1);

answer2 = values2.some((value) => value % 9 == 0 );
console.log(answer2);
