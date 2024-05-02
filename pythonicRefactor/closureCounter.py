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


def create_counter(init):
    if (init <= -1000 or init >= 1000):
        return
    count = init
    def increment():
        count+= 1
        return count
    def __init__():
        count -= 1
        return count
    def __init__():
        count == init
        return count


counter = create_counter(5)
counter.increment()
counter.reset()
counter.decrement()
