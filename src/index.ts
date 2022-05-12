/**
 * @description Get a value within a range at a certain percentage point
 * @param min The minimum bound of range
 * @param max The maximum bound of range
 * @param percentage The percentage point between 0 and 1 where 0.5 is 50%
 * @param strict whether to throw if given percentage out of range. Default is true
 * @returns The value for given percentage
 */
export function getValueAtPercentagePoint(
	min: number,
	max: number,
	percentage: number,
	strict = true
) {
	if (percentage < 0 || percentage > 1) {
		if (strict) {
			throw new Error("Percentage argument should be within range of 0 and 1.");
		} else {
			percentage = clamp(percentage, min, max);
		}
	}

	return min * (1 - percentage) + max * percentage;
}

/**
 * @description Limit value to range
 * @param value The value to limit
 * @param min The minimum limit of range
 * @param max The maximum limit of range
 * @returns The given value if falls between range.
 * Otherwise, it returns the minimum if it's to low or the maximum if it's to high
 */
export function clamp(value: number, min: number = 0, max: number = 1) {
	return Math.min(max, Math.max(min, value));
}

/**
 * @description Get a percentage within a range given a certain value
 * @param min The minimum bound of range
 * @param max The maximum bound of range
 * @param value The value to use to determine percentage within the range
 * @returns The percentage for given value
 */
export function getPercentageFromValue(min: number, max: number, value: number) {
	return clamp((value - min) / (max - min));
}

/**
 * @description Map a value from one range to a interpolated value of second range
 * @param rangeAMin The minimum of first range
 * @param rangeAMax The maximum of first range
 * @param value The value from first range
 * @param rangeBMin The minimum of second range
 * @param rangeBMax The maximum of second range
 */
export function interpolateValue(
	rangeAMin: number,
	rangeAMax: number,
	value: number,
	rangeBMin = 0,
	rangeBMax = 100
) {
	return getValueAtPercentagePoint(
		rangeBMin,
		rangeBMax,
		getPercentageFromValue(rangeAMin, rangeAMax, value)
	);
}