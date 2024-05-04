# pythonic refactor of leet code 1207 - unique number of occurances

# ORIGINAL CHALLENGE: Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

# ORIGINAL solution:

# function uniqueNumberOfOccurances(array) {
#     const fq = {};

#     for (let number of array) {
#         fq[number] = (fq[number] || 0) + 1;
#     }

#     const uniqueOccurances = new Set(Object.values(fq));
#   console.log(uniqueOccurances.size)


#     return uniqueOccurances.size === Object.keys(fq).length;
# };

# console.log(uniqueNumberOfOccurances([1,2])) // false
# console.log(uniqueNumberOfOccurances([-3,0,1,-3,1,1,1,-3,10,0])) // true
# console.log(uniqueNumberOfOccurances([1,2,2,1,1,3])) // true

# ANSWER BELOW. the main difficulty was confirming that the set method still exists within python. Otherwise the logic is the same.


def uniqueNumberOfOccurances(nums):
    from collections import Counter
    frequency_counter = Counter(nums)

    unique_occurances = set(frequency_counter.values())
    print("LENGTH OF UNIQUE: ")
    print(len(unique_occurances))

    return len(unique_occurances) == len(frequency_counter)

print(uniqueNumberOfOccurances([1,2]))
print(uniqueNumberOfOccurances([-3,0,1,-3,1,1,1,-3,10,0]))
print(uniqueNumberOfOccurances([1,2,2,1,1,3]))
