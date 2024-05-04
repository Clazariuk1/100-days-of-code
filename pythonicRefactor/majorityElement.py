# Pythonic refactor of majority element problem.

# Given an array of nums of size n, return the majority element.
# (majority element: the element that occurs more than n / 2 tiimes. Assume a majority element will always exist in the array)


# function majorityElement(nums) {
#     const nReduced = Math.floor(nums.length / 2)
#     const fq = {}
#     nums.forEach(num => {
#         fq[num] = (fq[num] || 0) + 1
#     })
#     for (let key in fq) {
#         if (fq[key] > nReduced) return key
#     }
# }

# console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
# console.log(majorityElement([3, 2, 3]))
import math
from collections import Counter

def majority_element(nums):
    nReduced = math.floor(len(nums) / 2)
    frequency_counter = Counter(nums)

    for key in frequency_counter:
        if frequency_counter[key] > nReduced:
            return key

print(majority_element([2,2,1,1,1,2,2]))
print(majority_element([3,2,3]))
