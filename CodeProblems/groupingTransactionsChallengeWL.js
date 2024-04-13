// was able to discern the basic, but could not correctly get the final answers array to show the key name and value of key in corresponding string element within the restrictive time limit.

function groupTransactions(transactions) {

    const fq = {}
    transactions.forEach(transaction => {
        fq[transaction] = (fq[transaction] || 0) + 1
    })
    console.log(fq)
    const answersArray = []
    for (const key in fq) {

        answersArray.push([key, fq[key]]);
    }

    answersArray.sort((a, b) => b[1] - a[1]);

    const sortedKeys = answersArray.map(pair => pair[0]);

    return sortedKeys;
}



//     let temp
//     for (let key in fq) {
//         for (let i = 0; i < fq.length; i++) {
//             if (fq[i].value > fq[i + 1]) {
//                 temp = fq[i]
//                 i++
//             }

//         }
//     }
//     const answersArray = Object.entries(fq)

//     answersArray.sort((a, b) => b[1] - a[1]);

//     // Extract the sorted keys
//     const sortedKeys = answersArray.map(pair => pair[0]);
// }


console.log(groupTransactions(["4", "bin", "can", "bin", "bin"]))
