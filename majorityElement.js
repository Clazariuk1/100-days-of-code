/*
Given an array of nums of size n, return the majority element.
(majority element: the element that occurs more than n / 2 tiimes. Assume a majority element will always exist in the array)
*/

// 0. declare the function majorityElement which accepts a nums array as parameter.
// 1. declare the value of n to be nums.length
// 2. make an empty frequency counter object into which to store the traversal of array data
// 3. iterate through the nums array using a loop (for each, for of, for classic, etc)
// 4. if the value at current index doesn't exist in the fq, make it, or else add one to the proper place key
// 5. Scan over the results with another for in loop
// 6. return the element that occurs at least n / 2 times

function majorityElement(nums) {
    const nReduced = Math.floor(nums.length / 2)
    const fq = {}
    nums.forEach(num => {
        fq[num] = (fq[num] || 0) + 1
    })
    for (let key in fq) {
        if (fq[key] > nReduced) return key
    }
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement([3, 2, 3]))
