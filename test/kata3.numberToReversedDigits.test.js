const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5,4,3,2,1]);
    expect(numberToReversedDigits(78)).toEqual([8,7]);
  });
});