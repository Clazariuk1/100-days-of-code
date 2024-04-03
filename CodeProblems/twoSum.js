// function twoSum(nums, target) {
//     const numMap = new Map(); // Map to store numbers and their indices

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i]; // Calculate the complement

//         // Check if the complement exists in the map
//         if (numMap.has(complement)) {
//             // If found, return the indices of the current number and its complement
//             return [numMap.get(complement), i];
//         }

//         // Otherwise, store the current number and its index in the map
//         numMap.set(nums[i], i);
//     }

//     // If no solution is found, return an empty array
//     return [];
// }

// // Example usage:
// console.log("TEST")
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); // Output: [0, 1] (because nums[0] + nums[1] equals 9)


function twoSum(nums, target) {
     // create the empty object by which to store variables data
    let ansObj = {}
    // create a loop with which to iterate through the numbers array
    for (let i = 0; i < nums.length; i++) {
        // declare a variable representing the value difference between the current array index value and the target value
        let remainder = target - nums[i]
        // if this value DOESN'T exist, add it to the variables object. Otherwise return the value of the current difference and the index of its corresponding counter's location
        if (ansObj[remainder] !== undefined) {
            return [ansObj[remainder], i]
        }
        ansObj[nums[i]] = i
    }
}


console.log("TEST")
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1] (because nums[0] + nums[1] equals 9)
