## Question
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`

## Example

```
Input: ["flower","flow","flight"]
Output: "fl"

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

## My Answer - 1

```javascript
var longestCommonPrefix = function(strs) {
  var firstStrs = strs[0];
  var result = "";

  if (strs.length == 0) {
    return result;
  }

  if (strs.length == 1) {
    return firstStrs;
  }

  for (var i = 0; i < strs.length; i++) {
    if (strs[i] === 0) return "";
  }

  for (var j = 0; j < firstStrs.length; j++) {
    for (var k = 1; k < strs.length; k++) {
      if (firstStrs[j] !== strs[k][j]) {
        return result;
      }
    }
    result += firstStrs[j];
  }
  return result;
};
```
