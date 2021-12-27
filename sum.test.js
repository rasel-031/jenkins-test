const cal = require("./cal.js");

test("add 1+2 = 3", () => {
  expect(cal.sum(1, 2)).toBe(3);
});

test("add 10+2 = 12", () => {
  expect(cal.sum(10, 2)).toBe(12);
});

test("add 511+19 = 530", () => {
  expect(cal.sum(511, 19)).toBe(530);
});
