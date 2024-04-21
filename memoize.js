/*
The following works with recursion and closure simultaneously.

Given a function fn, return a MEMOIZED version of that function.

Memoized: "a memoized function is a function that will never be called twice with the same inputs. Instead, it will return a cached value.
you can assume there are three possible input functions: 'sum', 'fib', 'factorial'

* sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
* fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
* factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
"

Constraints:

0 <= a, b <= 105
1 <= n <= 10
0 <= actions.length <= 105
actions.length === values.length
actions[i] is one of "call" and "getCallCount"
fnName is one of "sum", "factorial" and "fib"

*/

// 0. declare function memoize that declares fn as a parameter
// 1. create a function object variable to begin a closure for sum. ex: const sum = () => {}
// 2. create a function object variable to begin a closure for the action of factorial
// 3. create a function object variable to begin a closure for the action of fib
// 4. create conditionals of action within these sub functions
// 5. return the requested function on action.

// there MUST be code to allow for record keeping with the total call count over the course of the function object's lifetime - > this will be a sub-function called getCallCount()
// we must also have code that prevents extra counter calls on sequences previously seen


// personal note: this one is really cool but very difficult to wrap mind around at first glance. We make a cache object to refer to old answers so we DONT BURN SPACE/TIME on new computations. that's cool af. This is especially important when we echo into MORE complex programs with algorithms beyond you now. good for website data caching, api calls, stuff like that.

// THERES A MEMOIZE 2 . FIND IT

function memoize(fn) {
    callCache = {}
    return function(...args) {
        const key = JSON.stringify(args)
        if (key in callCache) {
            return callCache[key]
        }
        const result = fn.apply(this, args)
        callCache[key] = result
        return result
    }
}

let callCount = 0

const memoizedSum = memoize(function(a, b) {
    callCount += 1
    return a + b
})

const memoizedFib = memoize(function(n) {
    if (n <= 1) {
        callCount += 1
        return 1
    }
    return memoizedFib(n - 1) + memoizedFib(n - 2)
})
const memoizedFactorial = memoize(function(n) {
    if (n <= 1) {
        callCount += 1
        return 1
    }
    return memoizedFactorial(n - 1 * n)
})

const memoizedYEET = memoize(function() {

    let yeet = "YEET"
    return yeet
})
console.log(memoizedYEET()) // expect YEET ... lol
console.log("The function call count is: " + callCount) // this callCount is slightly off position
console.log(memoizedSum(2, 3)) // expect 5, makes a cache ref
console.log(memoizedSum(2, 3)) // expect 5
console.log("The function call count is: " + callCount) // this callCount is slightly off position


console.log(memoizedFib(5)) // expect 8, makes a cache ref
console.log(memoizedFib(5)) // expect 8

console.log(memoizedFactorial(5))
console.log("The function call count is: " + callCount) // this callCount is slightly off position

//     console.log("TODAY")
//     // 1. create the sum creature
//     const sum = (a, b) => {
//         return ( a + b)
//     }
//     const fib = (n) => {
//         if (n <= 1) {
//             return 1
//         }
//         return (fib(n - 1) + fib(n - 2))
//     }
//     const factorial = (n) => {
//         if (n <= 1) {
//             return 1
//         }
//         return (factorial(n - 1))
//     }
//     function getCallCount() {
//         return callCounter
//     }
// }

// //console.log(memoize(sum())) // expect [4,4,1,3,2]
// console.log(memoize(factorial())) // expect [2,6,2,2,6,2]
// console.log(memoize(fib())) // expect [8,1]
