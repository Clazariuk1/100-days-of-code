# Pythonic refactor of javascript solution to leet code 442 findAllDuplicates.js

# original problem:
# Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

# You must write an algorithm that runs in O(n) time and uses only constant extra space.


# function findAllDuplicates(nums) {
#     const n = nums.length
#     const fq = {}
#     for (let num of nums) {
#       if (num < 0 || num > n) {
#         return
#       }
#       fq[num] = (fq[num] || 0) + 1
#     }
#     const answersArray = []
#     for (let key in fq) {
#       if (fq[key] === 2) {
#         answersArray.push(key)
#       }
#     }
#     return answersArray
#   }

def findAllDuplicates(nums):
    from collections import Counter
    frequency_counter = Counter(nums)
    answers_object = []

    for key in frequency_counter:
        if frequency_counter[key] == 2:
            answers_object.append(key)

    return answers_object


print(findAllDuplicates([4,3,2,7,8,2,3,1]))
print(findAllDuplicates([1, 1, 2]))
print(findAllDuplicates([1]))

# using the Counter / Collections library / module pair in python, we get a faster set of code:
