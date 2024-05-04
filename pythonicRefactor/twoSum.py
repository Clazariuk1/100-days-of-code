# Original function -

# function twoSum(nums, target) {
#      // create the empty object by which to store variables data
#     let ansObj = {}
#     // create a loop with which to iterate through the numbers array
#     for (let i = 0; i < nums.length; i++) {
#         // declare a variable representing the value difference between the current array index value and the target value
#         let remainder = target - nums[i]
#         // if this value DOESN'T exist, add it to the variables object. Otherwise return the value of the current difference and the index of its corresponding counter's location
#         if (ansObj[remainder] !== undefined) {
#             return [ansObj[remainder], i]
#         }
#         ansObj[nums[i]] = i
#     }
# }


# console.log("TEST")
# const nums = [2, 7, 11, 15];
# const target = 9;
# console.log(twoSum(nums, target)); // Output: [0, 1] (because nums[0] + nums[1] equals 9)


def two_sum(nums, target):
    answer_object = {}

    for i in range(len(nums)):
        remainder = target - nums[i]

        if remainder in answer_object:
            return [answer_object[remainder], i]

        answer_object[nums[i]] = i


print(two_sum([2,7,11,15], 9)) # expect [0,1]
