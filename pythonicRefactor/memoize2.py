# Pythnic refactor of leetcode 2630. Original explanation and solution below:
# Memoize II. LeetCode 2630.

# given a function fn, return a memoized version of that function.
# A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
# fn can be any function and there are not constraints on what type of values it accepts. Inputs are considered identical if they are === to each other


# const memoize = (fn) => {
#     class TrieNode {
#         constructor() {
#             this.value = null
#             this.children = new Map()
#         }
#         getValue(args) {
#             return this.children.get(args)?.value
#         }
#         setValue(args, value) {
#             const childNode = this.children.get(args) ?? new TrieNode()
#             childNode.value = value
#             this.children.set(args, childNode)
#         }
#     }
#     const cache = new TrieNode()
#     const memoized = (...args) => {
#         if (args.length === 0) {
#             if (cache.value !== null) {
#                 return cache.value
#             }
#             const result = fn.apply(this, args)
#             cache.value = result
#             return result
#         }
#         let currentNode = cache
#         for (let i = 0; i < args.length; i++) {
#             const arg = args[i]
#             const childNode = currentNode.children.get(arg) ?? new TrieNode()
#             currentNode.children.set(arg, childNode)
#             currentNode = childNode

#         }
#         if (currentNode.value === null) {
#             const result = fn.apply(this, args)
#             currentNode.value = result
#         }
#         return currentNode.value
#     }
#     return memoized
# }

# let callCount = 0
# const memoizedFn = memoize(function(a, b){
#     callCount += 1
#     return a + b
# })
# console.log(memoizedFn(2, 3)) // 5
# console.log(memoizedFn(2, 3)) // 5
# console.log(callCount) // 1

class TrieNode:
    def __init__(self):
        self.value = None
        self.children = {}

    def get_value(self, args):
        return self.children.get(args, None).value

    def set_value(self, args, value):
        if args not in self.children:
            self.children[args] = TrieNode()
        self.children[args].value = value

def memoize2(fn):
    cache = TrieNode()

    def memoized(*args):
        if not args:
            if cache.value is not None:
                return cache.value
            result = fn(*args)
            cache.value = result
            return result

        current_node = cache
        for arg in args:
            if arg not in current_node.children:
                current_node.children[arg] = TrieNode()
            current_node = current_node.children[arg]

        if current_node.value is None:
            result = fn(*args)
            current_node.value = result

        return current_node.value

    return memoized

call_count = [0]

@memoize2
def sum_numbers(a, b):
    call_count[0] += 1
    return a + b

print(sum_numbers(2, 3))
print(sum_numbers(2, 3))
print(call_count[0])
