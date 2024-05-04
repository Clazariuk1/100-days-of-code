# Original explanation and function: Given a roman numeral, convert it into an integer

# function romanToInteger(numerals) {
#     const numeralHash = {
#         'I': 1,
#         'V': 5,
#         'X': 10,
#         'L': 50,
#         'C': 100,
#         'D': 500,
#         'M': 1000
#     }
#     let answer = 0
#     for (let i = 0; i < numerals.length; i++) {
#         const currentValue = numeralHash[numerals[i]]
#         const nextValue = numeralHash[numerals[i + 1]]

#         if (currentValue < nextValue) {
#             answer += nextValue - currentValue
#             i++
#         } else {
#             answer += currentValue
#         }
#     }
#     return answer
# }

# console.log(romanToInteger("III")) // expect 3
# console.log(romanToInteger("LVIII")) // expect 58
# console.log(romanToInteger("MCMXCIV")) // expect 1994

def roman_to_integer(numerals):
    numeral_hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    answer = 0
    i = 0
    while i < len(numerals):
        current_value = numeral_hash[numerals[i]]

        if i + 1 < len(numerals):
            next_value = numeral_hash[numerals[i + 1]]
            if current_value < next_value:
                answer += next_value - current_value
                i += 2
            else:
                answer += current_value
                i += 1

        else:
            answer += current_value
            i += 1

    return answer

print(roman_to_integer("III"))
print(roman_to_integer("LVIII"))
print(roman_to_integer("MCMXCIV"))
