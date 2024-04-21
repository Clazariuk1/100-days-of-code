/*
LEET CODE 442
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

*/

// 0. declare function findAllDuplicates which accepts a nums array as argument
// 1. create variable n which equals the length of the numbers array
// 2. create an empty object which will serve as frequency counter hash
// 3. create loop to iterate over numbers array
// 3A. create conditional : if the number at index is less than zero or greater than n, do not add to counter.
// 4. generate the frequency counter, adding each occurance of number to it.
// 5. After finishing the loop, create an empty array variable for the answers to return.
// 6. create a loop to iterate through the frequency counter hash object.
// 7. If the value of the key at index is exactly 2, push it to the answer array
// 8. Return the answer array. This will be an empty array if no number occurs twice.

function findAllDuplicates(nums) {
    const n = nums.length
    const fq = {}
    for (let num of nums) {
      if (num < 0 || num > n) {
        return
      }
      fq[num] = (fq[num] || 0) + 1
    }
    const answersArray = []
    for (let key in fq) {
      if (fq[key] === 2) {
        answersArray.push(key)
      }
    }
    return answersArray
  }

  console.log(findAllDuplicates([4,3,2,7,8,2,3,1])) // expect [2,3]
  console.log(findAllDuplicates([1,1,2])) // expect [1]
  console.log(findAllDuplicates([1])) // expect []
