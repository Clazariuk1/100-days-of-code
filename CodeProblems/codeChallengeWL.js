/* Below: solution to a practice assessment coding challenge for a prospective employer, executed through MDOJ browser-based evaluation system. I found problems with the testing modules wherein I was auto-failing all my tests, despite my logic being accurate in my function and my manual testing of *verbatim* copy-pasting the supplied input data into a console logged function return to receive the correct answers. Final result: Will likely not get the job due to technicality. Proof herein below that the data works.

*/

function aPlusB(lines) {
    const string = lines.replace(/\n/g, ' ')
    const words = string.split(' ')
    const numbers = words.map(Number)
    const problems = numbers[0]
    const answers = []
    for(let i = 1; i <= problems; i++) {
        for (let j = 1; j < numbers.length; j += 2) {
            let sum = numbers[j] + numbers[j + 1]
            answers.push(sum.toString())
        }
    return answers
    }
}

console.log(aPlusB("2 1 1 -1 0"))
console.log(aPlusB(`5
1 1
2 2
3 4
9999 9999
100000 100000`))
