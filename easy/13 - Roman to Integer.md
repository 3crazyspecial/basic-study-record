## Question
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

## Example
```
Input: "III"
Output: 3

Input: "IV"
Output: 4

Input: "IX"
Output: 9

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

## My Answer - 1
```javascript
var romanToInt = function(s) {
    // todo: 合法性检测，字符默认转大写
    let value = 0
    
    const basicValue = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    const sArr = s.split('')
    for (let i = 0; i < sArr.length; i++) {
        if (i + 1 > sArr.length) {
            value += basicValue[sArr[i]]
            return
        }
        let currentValue = ''
        switch(sArr[i]){
            case 'I':
                if(sArr[i + 1] == 'V' || sArr[i + 1] == 'X') {
                    currentValue = basicValue[sArr[i + 1]] - basicValue[sArr[i]]
                    i += 1
                } else {
                    currentValue = basicValue[sArr[i]]
                }
                break
            case 'X':
                if(sArr[i + 1] == 'L' || sArr[i + 1] == 'C') {
                    currentValue = basicValue[sArr[i + 1]] - basicValue[sArr[i]]
                    i += 1
                } else {
                    currentValue = basicValue[sArr[i]]
                }
                break
            case 'C':
                if(sArr[i + 1] == 'D' || sArr[i + 1] == 'M') {
                    currentValue = basicValue[sArr[i + 1]] - basicValue[sArr[i]]
                    i += 1
                } else {
                    currentValue = basicValue[sArr[i]]
                }
                break
            default:
                currentValue = basicValue[sArr[i]]
                break
        }
        value += currentValue
    }
    return value
}
```