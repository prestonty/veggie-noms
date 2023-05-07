// function calsBurn(weight, height, age, isMale) {
//   if (isMale === true) {
//     return Math.round(6.2 * weight + 12.7 * height - 6.76 * age + 66);
//   } else {
//     return Math.round(4.35 * weight + 4.7 * height - 4.7 * age + 655.1);
//   }
// }

// // 0 = maintain 30:40:30
// // 1 = bulk 30:50:20
// // 2 = lean  40p:30c:30f
// function macroRatio(calsBurn, type, weight) {
//   let PR;
//   let FR;
//   let CR;

//   type === 0
//     ? ((PR = 0.3), (CR = 0.4), (FR = 0.3))
//     : type === 1
//     ? ((PR = 0.3), (CR = 0.5), (FR = 0.2))
//     : ((PR = 0.4), (CR = 0.3), (FR = 0.3));
//   type === 1
//     ? (calsBurn += (1.0 * weight * weight) / 40.0)
//     : type === 2
//     ? (calsBurn -= (1.0 * weight * weight) / 40.0)
//     : (calsBurn = calsBurn);
//   return [
//     Math.round(PR * calsBurn),
//     Math.round(CR * calsBurn),
//     Math.round(FR * calsBurn),
//   ];
// }

// function getMeasurements(weight, height, age, isMale, type) {
//   weight < 100 ? (weight = 100) : weight;
//   weight > 200 ? (weight = 200) : weight;
//   return macroRatio(calsBurn(weight, height, age, isMale), type, weight);
// }
// x = getMeasurements(160, 175, 60, true, 0);
// console.log(x);
