# Refactored leetcode 2620: counter from javascript to python. Original below:

# Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
# function counterFunction(n) {
#     let count = n - 1
#     return () => {
#       count++
#       return count
#     }
#   }
#   const counter = counterFunction(10)

#   console.log(counter())
#   console.log(counter())
#   console.log(counter())


class CounterFunction:
    def __init__(self, init):
        self.count = init

    def countPlus(self):
        self.count += 1
        return self.count

counter = CounterFunction(100)

print(counter.countPlus())
print(counter.countPlus())
print(counter.countPlus())
print(counter.countPlus())
