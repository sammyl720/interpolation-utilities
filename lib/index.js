"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpolateValue = exports.getPercentageFromValue = exports.clamp = exports.getValueAtPercentagePoint = void 0;
/**
 * @description Get a value within a range at a certain percentage point
 * @param min The minimum bound of range
 * @param max The maximum bound of range
 * @param percentage The percentage point between 0 and 1 where 0.5 is 50%
 * @param strict whether to throw if given percentage out of range. Default is true
 * @returns The value for given percentage
 */
function getValueAtPercentagePoint(min, max, percentage, strict) {
    if (strict === void 0) { strict = true; }
    if (percentage < 0 || percentage > 1) {
        if (strict) {
            throw new Error("Percentage argument should be within range of 0 and 1.");
        }
        else {
            percentage = clamp(percentage, min, max);
        }
    }
    return min * (1 - percentage) + max * percentage;
}
exports.getValueAtPercentagePoint = getValueAtPercentagePoint;
/**
 * @description Limit value to range
 * @param value The value to limit
 * @param min The minimum limit of range
 * @param max The maximum limit of range
 * @returns The given value if falls between range.
 * Otherwise, it returns the minimum if it's to low or the maximum if it's to high
 */
function clamp(value, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return Math.min(max, Math.max(min, value));
}
exports.clamp = clamp;
/**
 * @description Get a percentage within a range given a certain value
 * @param min The minimum bound of range
 * @param max The maximum bound of range
 * @param value The value to use to determine percentage within the range
 * @returns The percentage for given value
 */
function getPercentageFromValue(min, max, value) {
    return clamp((value - min) / (max - min));
}
exports.getPercentageFromValue = getPercentageFromValue;
/**
 * @description Map a value from one range to a interpolated value of second range
 * @param rangeAMin The minimum of first range
 * @param rangeAMax The maximum of first range
 * @param value The value from first range
 * @param rangeBMin The minimum of second range
 * @param rangeBMax The maximum of second range
 */
function interpolateValue(rangeAMin, rangeAMax, value, rangeBMin, rangeBMax) {
    if (rangeBMin === void 0) { rangeBMin = 0; }
    if (rangeBMax === void 0) { rangeBMax = 100; }
    return getValueAtPercentagePoint(rangeBMin, rangeBMax, getPercentageFromValue(rangeAMin, rangeAMax, value));
}
exports.interpolateValue = interpolateValue;
