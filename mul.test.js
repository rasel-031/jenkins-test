const cal = require("./cal.js");

test("mul 1*2 = 2", () => {
  expect(cal.mul(1, 2)).toBe(2);
});

test("mul 10*2 = 20", () => {
  expect(cal.mul(10, 2)).toBe(20);
});

test("mul 530*0 = 0", () => {
  expect(cal.mul(530, 0)).toBe(0);
});
