"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
test('clamp will yield min value when given value is less then min', function () {
    expect((0, index_1.clamp)(5, 10, 20)).toBe(10);
});
test('clamp will yield max value when given value is greater then max', function () {
    expect((0, index_1.clamp)(30, 10, 20)).toBe(20);
});
test('clamp will yield value when given value is within range', function () {
    expect((0, index_1.clamp)(15, 10, 20)).toBe(15);
});
test('getValueAtPercentagePoint should yield 37 for 50% of range between 20 and 54', function () {
    expect((0, index_1.getValueAtPercentagePoint)(20, 54, 0.5)).toBe(37);
});
test('getValueAtPercentagePoint should throw error when invalid percentage value is provided', function () {
    expect(function () { return (0, index_1.getValueAtPercentagePoint)(20, 54, 1.2); }).toThrow("Percentage argument should be within range of 0 and 1.");
});
test("getPercentageFromValue should yield 0.5 for 37 from range between 20 and 54", function () {
    expect((0, index_1.getPercentageFromValue)(20, 54, 37)).toBe(0.5);
});
test('interpolateValue should yield 25 when range 1 is (0,800), value is 500, range 2 is (0, 40)', function () {
    expect((0, index_1.interpolateValue)(0, 800, 500, 0, 40)).toBe(25);
});
