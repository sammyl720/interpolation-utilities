### Useful functions for interpolating values from ranges

----
##### getValueAtPercentagePoint(rangeMin, rangeMax, percentagePoint)
Get a value at a percentage point in a range
```javascript
getValueAtPercentagePoint(5, 30, 0.5); // 17.5
```

---
##### getPercentageFromValue(rangeMin, rangeMax, value)
Get a percentage from a value in a range
```javascript
getPercentageFromValue(5, 30, 17.5); // 0.5
```


---
##### clamp(value, min, max)
Clamp a value between a minimum and maximum
```javascript
clamp(5, 0, 10); // 5
clamp(15, 0, 10); // 10
clamp(5, 10, 20); // 10
```

---
##### interpolateValue(rangeAMin, rangeAMax, value, rangeBMin, rangeBMax)
Interpolate a value between two ranges
```javascript
interpolateValue(0, 100, 50, 0, 1); // 0.5
interpolateValue(0, 250, 50, 0, 100); // 20
```
