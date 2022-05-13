import {
	clamp,
	getValueAtPercentagePoint,
	getPercentageFromValue,
	interpolateValue
} from '../src/index';

test('clamp with throw an error if min value greater or equal to max value', () => {
	expect(() => clamp(5, 10, 6)).toThrowError();
})

test('clamp will yield min value when given value is less then min', () => {
	expect(clamp(5, 10, 20)).toBe(10);
});

test('clamp will yield max value when given value is greater then max', () => {
	expect(clamp(30, 10, 20)).toBe(20);
});

test('clamp will yield value when given value is within range', () => {
	expect(clamp(15, 10, 20)).toBe(15);
});

test('getValueAtPercentagePoint should yield 37 for 50% of range between 20 and 54', () => {
	expect(getValueAtPercentagePoint(20, 54, 0.5)).toBe(37);
});


test('getValueAtPercentagePoint should throw error when invalid percentage value is provided', () => {
	expect(() => getValueAtPercentagePoint(20, 54, 1.2)).toThrow("Percentage argument should be within range of 0 and 1.");
});



test("getPercentageFromValue should yield 0.5 for 37 from range between 20 and 54", () => {
	expect(getPercentageFromValue(20, 54, 37)).toBe(0.5);
});

test('interpolateValue should yield 25 when range 1 is (0,800), value is 500, range 2 is (0, 40)', () => {
	expect(interpolateValue(0, 800, 500, 0, 40)).toBe(25);
})