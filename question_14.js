let s1 = 'rubyab';
let s2 = 'railsb';
  
let answer = compareString(s1, s2);
console.log(answer);
  

function compareString(str1, str2){
  let subjectArray1 = str1.split('');
  let subjectArray2 = str2.split('');
  let repetitionArray = [];
  
  for (var str of subjectArray1) {
    if(subjectArray2.includes(str)) {
      if (!repetitionArray.includes(str)) {
        repetitionArray.push(str);  
      }
    }
  }
  
  return repetitionArray.join();
}
