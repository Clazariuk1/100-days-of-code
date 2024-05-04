# Original javascript function below
# function longestCommonPrefix(strs) {
#     if (!strs.length) return '';

#     let prefix = strs[0];

#     for (let i = 1; i < strs.length; i++) {
#         while (strs[i].indexOf(prefix) !== 0) {
#             prefix = prefix.substring(0, prefix.length - 1);
#             if (!prefix) return '';
#         }
#     }

#     return prefix;
# }


# const exampleInput = ["flower", "flow", "flight"];
# console.log(longestCommonPrefix(exampleInput)); // Output: "fl"

# REFACTOR below

def longest_common_prefix(strings):
    if not strings:
        return ''

    prefix = strings[0]

    for i in range(1, len(strings)):
        while strings[i].find(prefix) != 0:
            prefix = prefix[:-1]
            if not prefix:
                return ''

    return prefix


print(longest_common_prefix(None)) # expect ''
print(longest_common_prefix(["flower", "flow", "flight"]))
