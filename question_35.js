let numbers = '99\t100\t201\t101\t9999\t2\t5\t6';
var new_data = numbers.split('\t')
                      .filter(val => Number(val) > 100)
                      .sort()
                      .reverse()
                      .join(',')

console.log(new_data);
