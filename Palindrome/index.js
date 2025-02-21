// Iterative approach :

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
    return true;
  }
}

console.log(isPalindrome("r")); //str.length = 1 : then true.

// Recursive Approach :

function isPalindromeRecursive(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  function check(left, right) {
    if (left >= right) {
      return true;
    } else if (str[left] !== str[right]) {
      return false;
    } else {
      return check(left + 1, right - 1);
    }
  }
  return check(0, str.length - 1);
}

console.log(isPalindromeRecursive("racecar"));
