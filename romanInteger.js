/*
Given a roman numeral, convert it into an integer

Time Complexity: O(N)
Space Complexity: O(1) (O(N))?

0. Declare function romanToInt which accepts a string of roman numerals as a parameter
1. Create an object/hash table in which to store the appropriate data for what integer value corresponds to which roman numeral
2. declare an answer value, starting at zero, which will accrue all numbers
3. create a for loop which iterates over the parameter string
4. Add each numeral value to the tally.
5. return final tally.

*/

function romanToInteger(numerals) {
    const numeralHash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let answer = 0
    for (let i = 0; i < numerals.length; i++) {
        const currentValue = numeralHash[numerals[i]]
        const nextValue = numeralHash[numerals[i + 1]]

        if (currentValue < nextValue) {
            answer += nextValue - currentValue
            i++
        } else {
            answer += currentValue
        }
    }
    return answer
}

console.log(romanToInteger("III")) // expect 3
console.log(romanToInteger("LVIII")) // expect 58
console.log(romanToInteger("MCMXCIV")) // expect 1994
