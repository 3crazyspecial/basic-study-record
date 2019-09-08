## Question
Given a 32-bit signed integer, reverse digits of an integer.

## Example
```
1.
Input: 123
Output: 321

Input: -123
Output: -321

Input: 120
Output: 21

```

## My Answer - 1
```javascript
var reverse = function(x) {
    if (x < 0) {
        x = '' + -x
        x = x.split('')
        x = x.reverse()
        x = -x.join('')
    } else {
        x = '' + x
        x = x.split('')
        x = x.reverse()
        x = +x.join('')
    }
    
    if (x >= Math.pow(-2, 31) && x <= Math.pow(2, 31) - 1) {
        return x
    } else {
        return 0
    }
};
```