// // Write a function to find the longest common prefix string amongst an array of strings.

// // If there is no common prefix, return an empty string "".



// // Example 1:

// // Input: strs = ["flower","flow","flight"]
// // Output: "fl"
// // Example 2:

// // Input: strs = ["dog","racecar","car"]
// // Output: ""
// // Explanation: There is no common prefix among the input strings.


// // Constraints:

// // 1 <= strs.length <= 200
// // 0 <= strs[i].length <= 200
// // strs[i] consists of only lowercase English letters.


// // 0. declare function longestCommonPrefix with paramater of an array of strings
// // Conditional start: if string is empty, return ""

// // Create a frequency counter object to iterate through the array of strings and tally up the letter totals.
// // create a second loop to iterate through the frequency counter .
// //

// function longestCommonPrefix(stringArray) {
//     const counterObject = {}
//     for (string of stringArray) {
//         if (string.length === 0) {
//             return ""
//         }
//         counterObject[letter] = (counterObject[letter] || 0 ) + 1
//     }

//     for (const key in counterObject) {
//         console.log("TEST PING")
//         return counterObject[key].value
//     }
// }

// console.log(longestCommonPrefix(["florida", "flying", "fancy"]));


// // function longestCommonPrefix(stringArray) {
// //     const counterObject = {}
// //     for(let i = 0; i <= stringArray.length ; i++) {

// //         if (
// //             counterObject
// //         )
// //         return false
// //     }
// // }


// True and Final Solution



/*

function findLongestCommonPrefix(strs) {
    if (!strs.length) return ''

    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {

        }
    }
}

*/


function longestCommonPrefix(strs) {
    if (!strs.length) return '';

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (!prefix) return '';
        }
    }

    return prefix;
}


const exampleInput = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(exampleInput)); // Output: "fl"



// var longestCommonPrefix = function (strs) {
//     // Return early on empty input
//     if (!strs.length) return '';

//     // Loop through the letters of the first word
//     for (let i = 0; i <= strs[0].length; i++) {
//         // Check if this character is present in the same position of every string
//         if (!strs.every((string) => string[i] === strs[0][i])) {
//             // If not, return the string up to and including the previous character
//             return strs[0].slice(0, i);
//         }
//     }

//     return strs[0];
// };


/* personal progress note, have to go over the base structure more with these forms to ensure more off-the-cuff. Glitchiness with operating within VS code, must examine how to circumvent.
FOUND you! Toggle at right edge of 'output' bar on terminal screen
*/
