import { lowerBound, upperBound } from "./bounds";

describe("lowerBound", () => {
  test.each([
    ["^16.8.0", ">=16.8.0"],
    ["16.8.0", ">=16.8.0"],
    [">=2.0.0 || >=3.0.0", ">=2.0.0"],
    ["5.0.0 || >=1.2.3 <5.0.0 || 6.7.8", ">=1.2.3"],
    [">5.0.0", ">5.0.0"],
    ["5.0.0", ">=5.0.0"],
    [">=1.2.3 <5.0.0", ">=1.2.3"],
    ["6.7.8", ">=6.7.8"],
    ["1.2.4 - 5.1.0", ">=1.2.4"],
    ["*", "0.0.0"]
  ])("the lower bound of %s is %s", (range, bound) => {
    expect(lowerBound(range)).toBe(bound);
  });
});

describe("upperBound", () => {
  test.each([
    ["^16.8.0", "<17.0.0"],
    ["16.8.0", "<=16.8.0"],
    [">=2.0.0 || >=3.0.0", null],
    ["5.0.0 || >=1.2.3 <5.0.0 || 6.7.8", "<=6.7.8"],
    [">5.0.0", null],
    ["5.0.0", "<=5.0.0"],
    [">=1.2.3 <5.0.0", "<5.0.0"],
    ["6.7.8", "<=6.7.8"],
    ["1.2.4 - 5.1.0", "<=5.1.0"],
    ["*", null]
  ] as [string, string | null][])(
    "the upper bound of %s is %s",
    (range, bound) => {
      expect(upperBound(range)).toBe(bound);
    }
  );
});
