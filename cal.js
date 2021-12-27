const sum = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  if (b === 0) {
    return "You cant divide by 0";
  } else {
    return a / b;
  }
};

module.exports = { sum, sub, mul, div };
