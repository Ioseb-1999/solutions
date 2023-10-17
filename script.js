// 1. https://leetcode.com/problems/two-sum/description/

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

// 2. https://leetcode.com/problems/palindrome-number/
var isPalindrome = function (x) {
  const answer = x.toString().split("").reverse().join("") === x.toString();
  return answer;
};

// 3. https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const numberArr = s.split("");
  let result = 0;

  for (let i = 0; i < numberArr.length; i++) {
    const currentSymbolValue = symbols[numberArr[i]];
    const nextSymbolValue = symbols[numberArr[i + 1]];

    if (nextSymbolValue && currentSymbolValue < nextSymbolValue) {
      result += nextSymbolValue - currentSymbolValue;
      i++;
    } else {
      result += currentSymbolValue;
    }
  }

  return result;
};

// 4. https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }

  strs.sort();

  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];

  const commonPrefix = [];

  for (let i = 0; i < firstStr.length; i++) {
    if (i < lastStr.length && firstStr[i] === lastStr[i]) {
      commonPrefix.push(firstStr[i]);
    } else {
      break;
    }
  }

  return commonPrefix.join("");
};

// 5. https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  const stack = [];

  const bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (bracketPairs[char]) {
      stack.push(char);
    } else {
      const lastBracket = stack.pop();

      if (bracketPairs[lastBracket] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// 6. https://leetcode.com/problems/remove-duplicates-from-sorted-array/
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let uniqueCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
};
// 7. https://leetcode.com/problems/remove-element/

var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

// 8. https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

// 9. https://leetcode.com/problems/search-insert-position/

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

// 10. https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function (s) {
  s = s.trim();

  if (!s) {
    return 0;
  }

  const lastSpaceIndex = s.lastIndexOf(" ");

  if (lastSpaceIndex === -1) {
    return s.length;
  }

  return s.length - lastSpaceIndex - 1;
};

// 11. https://leetcode.com/problems/plus-one/

var plusOne = function (digits) {
  const n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);

  return digits;
};

// 12. https://leetcode.com/problems/add-binary/

var addBinary = function (a, b) {
  let result = "";
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;

    const sum = digitA + digitB + carry;
    const currentDigit = sum % 2;
    carry = Math.floor(sum / 2);

    result = currentDigit + result;

    i--;
    j--;
  }

  return result;
};

// 13. https://leetcode.com/problems/sqrtx/

var mySqrt = function (x) {
  if (x <= 1) {
    return x;
  }

  let left = 1;
  let right = Math.floor(x / 2);
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid <= x / mid) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

// 14. https://leetcode.com/problems/climbing-stairs/

var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }

  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// 15. https://leetcode.com/problems/merge-sorted-array/

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If there are remaining elements in nums2, copy them to nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};

// 16. https://leetcode.com/problems/power-of-two/

var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};

// 17. https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
};

// 18. https://leetcode.com/problems/add-digits/

var addDigits = function (num) {
  if (num === 0) {
    return 0;
  }

  return num % 9 === 0 ? 9 : num % 9;
};

// 19. https://leetcode.com/problems/power-of-three/

var isPowerOfThree = function (n) {
  if (n <= 0) {
    return false;
  }

  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};

// 20. https://leetcode.com/problems/power-of-four/

var isPowerOfFour = function (n) {
  if (n <= 0) {
    return false;
  }

  if ((n & (n - 1)) !== 0) {
    return false;
  }

  return (n & 0x55555555) !== 0;
};

// 21. https://leetcode.com/problems/reverse-string/

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
}

// 22. https://leetcode.com/problems/reverse-vowels-of-a-string/

function reverseVowels(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  const sArray = s.split('');

  let left = 0;
  let right = sArray.length - 1;

  while (left < right) {

    while (left < right && !vowels.has(sArray[left])) {
      left++;
    }

    while (left < right && !vowels.has(sArray[right])) {
      right--;
    }

    const temp = sArray[left];
    sArray[left] = sArray[right];
    sArray[right] = temp;

    left++;
    right--;
  }

  return sArray.join('');
}


// 23. https://leetcode.com/problems/valid-perfect-square/

function isPerfectSquare(num) {
  if (num === 0 || num === 1) {
    return true;
  }

  let left = 1;
  let right = Math.floor(num / 2);

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const square = mid * mid;

    if (square === num) {
      return true; 
    } else if (square < num) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return false; 
}

// 24. https://leetcode.com/problems/ransom-note/

function canConstruct(ransomNote, magazine) {
  const letterCount = {};

  for (const char of magazine) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  for (const char of ransomNote) {
    if (!letterCount[char]) {
      return false;
    }
    letterCount[char]--;
  }

  return true;
}

// 25. https://leetcode.com/problems/find-the-difference/

function findTheDifference(s, t) {
  let result = 0;

  for (const char of s + t) {
    result ^= char.charCodeAt(0);
  }

  return String.fromCharCode(result);
}