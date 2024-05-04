# refactor of sliding windows leetcode 3. Original prompt and function below:


# leet code 3: longest substring without repeating characters. SLIDING WINDOW.
# Given a string s, find the length of the longest
# substring
# without repeating characters.

# function containsDuplicates2(nums, k) {
#     // sliding window using a Set

#     const set = new Set();

#     for (let i = 0; i < nums.length; i++) {
#         const num = nums[i];
#         if (set.has(num)) {
#             return true;
#         }

#         set.add(num);
#         set.delete(nums[i - k]);
#     }

#     return false;
# };

# console.log(containsDuplicates2([1,2,3,1], 3)) // output: true
# console.log(containsDuplicates2([1,0,1,1], 1)) // output: true
# console.log(containsDuplicates2([1,2,3,1,2,3], 2)) // output: false

def contains_duplicates_2(nums, k):
    number_set = set()

    for i in range(len(nums)):
        num = nums[i]
        if num in number_set:
            return True

        number_set.add(num)

        if i >= k:
            number_set.remove(nums[i - k])

    return False

print(contains_duplicates_2([1,2,3,1], 3)) # expect true
print(contains_duplicates_2([1,0,1,1], 1)) # expect true
print(contains_duplicates_2([1,2,3,1,2,3], 2)) # expect false
