/*
Leet Code 1207. Unique Number of Occurances

I learned about incorporating the new Set method for this one and how to effectively create and make use of the Set method in js.

CHALLENGE PROMPT:
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true



*/

// 0. Declare function uniqueNumberOfOccurances which accepts an array of integers as an argument.
// 1. declare an empty object which will be used as the frequency counter.
// 2. declare a loop which will iterate through the parameter array
// 3. generate the elements at each respective 'frequence of occurrance' within the frequency counter object.
// 4. Create a data set which stores this fq's frequencies
// 5. Compare this data set's size with the length of the frequency counter. Return true if they are the same length. Return false if not. WE CANNOT USE LENGTH ON SET METHOD ENTITIES. use


function uniqueNumberOfOccurances(array) {
    const fq = {};

    for (let number of array) {
        fq[number] = (fq[number] || 0) + 1;
    }

    const uniqueOccurances = new Set(Object.values(fq));
  console.log(uniqueOccurances.size)


    return uniqueOccurances.size === Object.keys(fq).length;
};

console.log(uniqueNumberOfOccurances([1,2])) // false
console.log(uniqueNumberOfOccurances([-3,0,1,-3,1,1,1,-3,10,0])) // true
console.log(uniqueNumberOfOccurances([1,2,2,1,1,3])) // true

// scratch code

// function uniqueNumberOfOccurances(array) {
//   const fq = {}
//   for (let index of array){
//     fq[index] = (fq[index] || 0) + 1
//   }
//   console.log(fq)
//   for (let element in fq) {
//     console.log(fq[element])

//   }
// }
