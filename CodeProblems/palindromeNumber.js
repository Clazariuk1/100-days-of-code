// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.



// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// Constraints:

// -231 <= x <= 231 - 1


// Follow up: Could you solve it without converting the integer to a string?

// 0. Declare your function title and its paramaters
// 0A . If the number is not a positive value, return false
// 1. Create a loop which iterates start to finish across the paramater variable to its halfway point
// 2. Create a second loop which iterates finish to start across the parameter variable to its halfway point
// 3. compare whether the index value of both positions is the same
// 4. if same, iterate onwards. If not return false
// 5. Return true if you get to the halfway point with successful iteration .

// SOLVE WITHOUT CONVERTING TO A STRING BONUS
// two pointer method
// function palindromeNumber(x) {
//     if (x < 0) {
//         return false
//     }
//     const str = x.toString()
//     for (let i = 0; i < str.length / 2; i++) {
//         let j = str.length - 1
//         if (str[i] !== str[j]) {
//             return false
//         }
//         i++
//         j--
//     }
//     return true
// }

// console.log(palindromeNumber(121));
// console.log(palindromeNumber(41154));
// console.log(palindromeNumber(-112));

// string reversal method

// function palindromeNumber(x){
//     return x == x.toString().split('').reverse().join('')
// }

// number reversal method. I looked it up, do not fully understand what's transpiring within the while loop.

function palindromeNumber(x) {
    if (x<0) {
        return false
    }
    const temporary = x
    let reversed = 0
    while (x > 0) {
        reversed = (reversed * 10) + (x % 10)
        x = parseInt(x / 10)
    }
    return reversed == temporary
}

console.log(palindromeNumber(121));
console.log(palindromeNumber(41154));
console.log(palindromeNumber(-112));
