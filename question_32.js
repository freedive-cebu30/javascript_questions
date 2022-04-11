let value = "ph-cebu, japan-tokyo, japan-osaka, Taiwan-taipei, japan-kyoto";
let arrayValue = value.split(",").map((v) => v.trim());
let arrayValueJapan = arrayValue.filter((value => value.startsWith("japan-")));
let capitalValueJapan = arrayValueJapan.map((valueJapan) => valueJapan.substring(0, 1).toUpperCase() + valueJapan.substring(1));
let stringJapan = capitalValueJapan.join(",")
console.log(stringJapan);
