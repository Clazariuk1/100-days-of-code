# Refactored below javascript function into Python. Only problem encountered: was unable to successfully access the 'init' argument in reset method call, was forced to refactor to a zero resetå

# function createCounter(init) {
#     if (init <= -1000 || init >= 1000) {
#         return
#     }
#     let count = init
#     return {
#         increment: () => {
#             count++
#             return count
#         },
#         decrement: () => {
#             count--
#             return count
#         },
#         reset: () => {
#             count = init
#             return count
#         }
#     }
# }

#  const counter = createCounter(5)
#  console.log(counter.increment()); // 6
#  console.log(counter.reset()); // 5
#  console.log(counter.decrement()); // 4

class CreateCounter:
    def __init__(self, init):
        self.count = init

    def reset(self):
        self.count = 0
        return self.count


    def increment(self):
        self.count += 1
        return self.count

    def decrement(self):
        self.count -= 1
        return self.count


counter = CreateCounter(5)

print(counter.count)
print(counter.increment())
print(counter.reset())
print(counter.decrement())
print(counter.count)
