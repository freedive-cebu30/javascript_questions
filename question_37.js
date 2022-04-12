let human = new Map([["name", "Taro"], ["age", 20], ["height", 180], ["weight", 60]]);
let human2 = new Map([["name2", "Jiro"], ["age2", 30], ["height2", 170], ["weight2", 50]]);

let human3 = new Map([...human, ...human2]);
