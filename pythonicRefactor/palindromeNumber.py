# Original Instructions / function:
# // Given an integer x, return true if x is a
# // palindrome
# // , and false otherwise.

# function palindromeNumber(x) {
#     if (x<0) {
#         return false
#     }
#     const temporary = x
#     let reversed = 0
#     while (x > 0) {
#         reversed = (reversed * 10) + (x % 10)
#         x = parseInt(x / 10)
#     }
#     return reversed == temporary
# }

# console.log(palindromeNumber(121));
# console.log(palindromeNumber(41154));
# console.log(palindromeNumber(-112));

def palindrome_number(x):
    if x < 0:
        return False
    temporary = x
    reversed = 0
    while x > 0:
        reversed = (reversed * 10) + (x % 10)
        x = int(x / 10)

    return reversed == temporary

print(palindrome_number(121))
print(palindrome_number((41154)))
print(palindrome_number(-112))

# This one was simple for sure.
