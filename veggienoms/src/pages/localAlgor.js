function calsBurn(weight, height, age, isMale) {
  if (isMale === true) {
    return Math.round(6.2 * weight + 12.7 * height - 6.76 * age + 66);
  } else {
    return Math.round(4.35 * weight + 4.7 * height - 4.7 * age + 655.1);
  }
}

// 0 = maintain 30:40:30
// 1 = bulk 30:50:20
// 2 = lean  40p:30c:30f
function macroRatio(calsBurn, type, weight) {
  let PR;
  let FR;
  let CR;

  if (type === 0) {
    (PR = 0.3)((CR = 0.4))((FR = 0.3));
  } else if (type === 1) {
    (PR = 0.3)((CR = 0.5))((FR = 0.2));
  } else {
    (PR = 0.4)((CR = 0.3))((FR = 0.3));
  }

  if (type === 1) {
    calsBurn += (1.0 * weight * weight) / 40.0;
  } else if (type === 2) {
    calsBurn -= (1.0 * weight * weight) / 40.0;
  }

  return [
    Math.round(PR * calsBurn) / 4,
    Math.round(CR * calsBurn) / 4,
    Math.round(FR * calsBurn) / 9,
  ];
}

function getMeasurements(weight, height, age, isMale, type) {
  if (weight < 100) {
    weight = 100;
  } else if (weight > 200) {
    weight = 200;
  }
  return macroRatio(calsBurn(weight, height, age, isMale), type, weight);
}

module.exports = {
  getMeasurements,
  calsBurn,
};
