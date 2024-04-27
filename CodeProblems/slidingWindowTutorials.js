// // leet code 3: longest substring without repeating characters. SLIDING WINDOW.

// // Given a string s, find the length of the longest
// // substring
// //  without repeating characters.

// // 0. declare function called 'lengthOfLongestSubstring' that accepts a string as a parameter
// // 1. declare a variable for the left side of the window slider with starting value of 0, start of string.
// // 2. declare a variable for the maximum length discovered of subsets, starting value 0.
// // 3. declare a variable for the temporary storage of subset strings. Fastest / simplest is initializing through Set() method with empty value to start.
// // 4. BEGIN a loop through the string parameter, where the index is intended to be the 'right' side of sliding window
// // 5. Create a loop within this loop which will examine whether the character at index / right slide edge already exists within the temporary subset storage variable, delete the character at  left slider position within the variable and MOVE THE LEFT SLIDER UP ONE POSITION
// // 6. Outside this loop but within the original loop, ADD the character at index/right slider position to the temp storage array.
// // 7. Determine the new maxlength value by comparing values of current max length and the distance between the slider edges plus one. The larger number is the true max.
// // 8. return max value.


// // ANSWER BELOW:
// var lengthOfLongestSubstring = function(s) {
//     let left = 0;
//     let maxLength = 0;
//     let charSet = new Set();

//     for (let right = 0; right < s.length; right++) {
//         while (charSet.has(s[right])) {
//             charSet.delete(s[left]);
//             left++;
//         }

//         charSet.add(s[right]);
//         maxLength = Math.max(maxLength, right - left + 1);
//     }
//   console.log(charSet)
//     return maxLength;
// };


// console.log(lengthOfLongestSubstring("abcabcbb")) // expect 3. 'abc' is longest
// console.log(lengthOfLongestSubstring("abccabcbb")) // expect 3. 'abc' is longest
// console.log(lengthOfLongestSubstring("bbbbb")) // expect 1 . 'b' is longest
// console.log(lengthOfLongestSubstring("pwwkew")) // expect 3. 'wke' is longest

/*
The problem:
use a sliding window today!
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

abs() : returns the absolute value of a number. ex: abs(1-5) is 4, as the negative 4 value is converted to an absolute.
In this instance k is the DISTANCE BETWEEN INDEXES, not a true number value. in otherwords the index of num[i] - index of num[j] must be less than or equal to k for it to work.

// 0 declare function and parameter names
// 1 declare value for left slider window initialized at 0
// 2 declare value for temp storage variable initialized at 0
// 3? initiate a loop through the number array. The index of this will serve as the right slider.
//
// end: if the absolute value of left slider - right slider is <= k, return true
// end2: return false

*/

// function containsDuplicates2(numArray, k) {
//   left = 0
//   temp = 0

//   for (let right = 0; right < numArray.length; right++) {
//     console.log("YEET")
//   }

//     if (abs(left - right) <= k) {
//       return true
//     }
//   return false
// }

// const abs = (n) => {
//     if (n >= 0) {
//         return n;
//     }

//     return -n;
// }

// Below solution works. It is not clear / concise the visualization of sliding windows. however. Completely disregarding 'j'. what's up with that.

function containsDuplicates2(nums, k) {
    // sliding window using a Set

    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (set.has(num)) {
            return true;
        }

        set.add(num);
        set.delete(nums[i - k]);
    }

    return false;
};

console.log(containsDuplicates2([1,2,3,1], 3)) // output: true
console.log(containsDuplicates2([1,0,1,1], 1)) // output: true
console.log(containsDuplicates2([1,2,3,1,2,3], 2)) // output: false
