## Question
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

## Example
```
Input: 121
Output: true

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

## My Answer - 1
```javascript
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    } else {
        var reverse = +x.toString().split('').reverse().join('')
        return x === reverse ? true : false 
    }
};
```
