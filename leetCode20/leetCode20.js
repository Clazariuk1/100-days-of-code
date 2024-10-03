function leetCode20(s) {
    const stack = [];
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        // If it's an opening bracket, push to the stack
        if (mapping[char]) {
            stack.push(char);
        } else {
            // If it's a closing bracket, check if it matches the top of the stack
            if (stack.length === 0 || mapping[stack.pop()] !== char) {
                return false; // Invalid if stack is empty or doesn't match
            }
        }
    }

    // If the stack is empty, all brackets matched correctly
    return stack.length === 0;
}

// Example usage
console.log(leetCode20("()")); // Output: true
console.log(leetCode20("()[]{}")); // Output: true
console.log(leetCode20("(]")); // Output: false
console.log(leetCode20("([])")); // Output: true




// // Back in the saddle Brain Work, leetcode20: valid parenthesis

// // Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// // An input string is valid if:

// // Open brackets must be closed by the same type of brackets.
// // Open brackets must be closed in the correct order.
// // Every close bracket has a corresponding open bracket of the same type.



// function leetCode20(string){
//     const stringVariables = ['(', ')', '{', '}', '[', ']']
//     for (let char of string) {
//         i = [stringVariabl
//         if (char === stringVarliables[i])
//     }
//     console.log(string)
// }

// leetCode20("potatoes")

// // Example 1:

// // Input: s = "()"

// // Output: true

// // Example 2:

// // Input: s = "()[]{}"

// // Output: true

// // Example 3:

// // Input: s = "(]"

// // Output: false

// // Example 4:

// // Input: s = "([])"

// // Output: true

// const Christopher = 33
// console.log(Christopher)



// // Constraints:

// // 1 <= s.length <= 104
// // s consists of parentheses only '()[]{}'.
