let values =  ["Ms. Tanaka", "Mr. Suzuki", "Ms. Akagi", "Mrs. Yoko", "Ms. Yoshiki"];
let arrayBox = [];
let arrayBox2 = [];
  
arrayBox = values.filter((value) => value.startsWith("Ms."));
console.log(arrayBox);
arrayBox2 = values.filter((value) => value.endsWith("ki"));
console.log(arrayBox2);
