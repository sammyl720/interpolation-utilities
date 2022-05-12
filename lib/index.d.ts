/**
 * @description Get a value within a range at a certain percentage point
 * @param min The minimum bound of range
 * @param max The maximum bound of range
 * @param percentage The percentage point between 0 and 1 where 0.5 is 50%
 * @param strict whether to throw if given percentage out of range. Default is true
 * @returns The value for given percentage
 */
export declare function getValueAtPercentagePoint(min: number, max: number, percentage: number, strict?: boolean): number;
/**
 * @description Limit value to range
 * @param value The value to limit
 * @param min The minimum limit of range
 * @param max The maximum limit of range
 * @returns The given value if falls between range.
 * Otherwise, it returns the minimum if it's to low or the maximum if it's to high
 */
export declare function clamp(value: number, min?: number, max?: number): number;
/**
 * @description Get a percentage within a range given a certain value
 * @param min The minimum bound of range
 * @param max The maximum bound of range
 * @param value The value to use to determine percentage within the range
 * @returns The percentage for given value
 */
export declare function getPercentageFromValue(min: number, max: number, value: number): number;
/**
 * @description Map a value from one range to a interpolated value of second range
 * @param rangeAMin The minimum of first range
 * @param rangeAMax The maximum of first range
 * @param value The value from first range
 * @param rangeBMin The minimum of second range
 * @param rangeBMax The maximum of second range
 */
export declare function interpolateValue(rangeAMin: number, rangeAMax: number, value: number, rangeBMin?: number, rangeBMax?: number): number;
