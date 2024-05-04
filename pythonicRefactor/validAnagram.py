# Original challenge and answer: Given two strings, 's' and 't', return TRUE if t is an anagram of s, and FALSE otherwise.

# function validAnagram(s, t) {
#     if (s.length !== t.length || s === t) {
#         return false
#     }
#     const counterS = {}
#     const counterT = {}
#     for (let char of s) {
#         counterS[char] = (counterS[char] || 0) + 1
#     }
#     for (let char of t) {
#         counterT[char] = (counterT[char] || 0) + 1
#     }
#     console.log(counterS)
#     console.log(counterT)
#     for (let char in counterS) {
#         if (counterS[char] !== counterT[char]) {
#             return false
#         }
#     }
#     return true
# }

# console.log(validAnagram("!?$.- WHAT", "?!- THAW.$")) // expect true
# //console.log(validAnagram("test", "test")) // expect false
# //console.log(validAnagram("anagram", "nagaram")) // expect true
# //console.log(validAnagram("rat", "car")) // expect false
# //console.log(validAnagram("racecar", "carrace")) // expect true
# //console.log(validAnagram("pigeon", "pidgy")) // expect false

from collections import Counter

def valid_anagrams(s, t):
    if len(s) != len(t) or s == t:
        return False

    counterS = Counter(s)
    counterT = Counter(t)

    for char in counterS:
        if counterS[char] != counterT[char]:
            return False

    return True

print(valid_anagrams("!?$.- WHAT", "?!- THAW.$"))
print(valid_anagrams("test", "test"))
print(valid_anagrams("anagram", "nagaram"))
print(valid_anagrams("rat", "car"))
print(valid_anagrams("racecar", "carrace"))
print(valid_anagrams("pigeon", "pidgy"))
