/*
PROBLEM: Given two strings, 's' and 't', return TRUE if t is an anagram of s, and FALSE otherwise.

ANAGRAM definition: a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

the magic secret: use and compare ASCII values of the strings. (actually this solution isn't 'better', it's just different.)


constraints: s and t consist of lowercase english letters.
CHALLENGE: what if the input contain unicode characters? How do you adapt the solution? --> frequency counter method will incorporate ANY unicode character, regardless of traditional language.
*/
// 0. declare function called validAnagram that accepts two string paramaters, s and t.
// 1. create a conditional: if the strings are NOT the same length, OR the strings are literally the same string, return false.
// 2. create two empty counter variables for the s and t strings, respectively
// 3. create a for/of loop for each variable to iterate over the string and fill the frequency counters
// 4. create a for/in loop which compares the value at each key position in counter for s with the respective position for counter t
// 5. return false if they are not the same, else true.

function validAnagram(s, t) {
    if (s.length !== t.length || s === t) {
        return false
    }
    const counterS = {}
    const counterT = {}
    for (let char of s) {
        counterS[char] = (counterS[char] || 0) + 1
    }
    for (let char of t) {
        counterT[char] = (counterT[char] || 0) + 1
    }
    console.log(counterS)
    console.log(counterT)
    for (let char in counterS) {
        if (counterS[char] !== counterT[char]) {
            return false
        }
    }
    return true
}

console.log(validAnagram("!?$.- WHAT", "?!- THAW.$")) // expect true
//console.log(validAnagram("test", "test")) // expect false
//console.log(validAnagram("anagram", "nagaram")) // expect true
//console.log(validAnagram("rat", "car")) // expect false
//console.log(validAnagram("racecar", "carrace")) // expect true
//console.log(validAnagram("pigeon", "pidgy")) // expect false
