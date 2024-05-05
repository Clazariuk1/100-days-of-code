# original challenge and function: given a function fn, return a MEMOIZED version of that function


# function memoize(fn) {
#     callCache = {}
#     return function(...args) {
#         const key = JSON.stringify(args)
#         if (key in callCache) {
#             return callCache[key]
#         }
#         const result = fn.apply(this, args)
#         callCache[key] = result
#         return result
#     }
# }

# let callCount = 0

# const memoizedSum = memoize(function(a, b) {
#     callCount += 1
#     return a + b
# })

# const memoizedFib = memoize(function(n) {
#     if (n <= 1) {
#         callCount += 1
#         return 1
#     }
#     return memoizedFib(n - 1) + memoizedFib(n - 2)
# })
# const memoizedFactorial = memoize(function(n) {
#     if (n <= 1) {
#         callCount += 1
#         return 1
#     }
#     return memoizedFactorial(n - 1 * n)
# })

# const memoizedYEET = memoize(function() {

#     let yeet = "YEET"
#     return yeet
# })
# console.log(memoizedYEET()) // expect YEET ... lol
# console.log("The function call count is: " + callCount) // this callCount is slightly off position
# console.log(memoizedSum(2, 3)) // expect 5, makes a cache ref
# console.log(memoizedSum(2, 3)) // expect 5
# console.log("The function call count is: " + callCount) // this callCount is slightly off position


# console.log(memoizedFib(5)) // expect 8, makes a cache ref
# console.log(memoizedFib(5)) // expect 8

# console.log(memoizedFactorial(5))
# console.log("The function call count is: " + callCount) // this callCount is slightly off position

def memoize(fn):
    call_cache = {}

    def memoized_function(*args):
        key = tuple(args)
        if key in call_cache:
            return call_cache[key]

        result = fn(*args)
        call_cache[key] = result
        return result


    return memoized_function

call_count = 0

@memoize
def sum_numbers(a, b):
    global call_count
    call_count += 1
    return a + b

@memoize
def fibonacci(n):
    global call_count
    if n <= 1:
        call_count += 1
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

@memoize
def factorial(n):
    global call_count
    if n <= 1:
        call_count += 1
        return 1
    return n * factorial(n - 1)

@memoize
def yeet():
    return "YEET"

print(yeet())
print("The function call count is: ", call_count)

print(sum_numbers(2, 3))
print(sum_numbers(2, 3))
print("The function call count is: ", call_count)

print(fibonacci(5))
print(fibonacci(5))

print(factorial(5))
print("The function call count is: ", call_count)
