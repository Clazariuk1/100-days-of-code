/*
Write a function createCounter that accepts an initial integer init. It should return an object with htree functions.
The three functions:
increment() increases current value by one and returns it
decrement() reduces value by one and returns it
reset() sets the current value to init and returns it

*/

function createCounter(init) {
    if (init <= -1000 || init >= 1000) {
        return
    }
    let count = init
    return {
        increment: () => {
            count++
            return count
        },
        decrement: () => {
            count--
            return count
        },
        reset: () => {
            count = init
            return count
        }
    }
}

 const counter = createCounter(5)
 console.log(counter.increment()); // 6
 console.log(counter.reset()); // 5
 console.log(counter.decrement()); // 4
