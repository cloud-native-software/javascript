const myNumbers = [4, 1, -20, -7, 5, 9, -6]

filterOdd = (x) => x % 2 != 0
filterEven = (x) => x % 2 == 0
// filterOdd = function (x) {
//     return x % 2 != 0
// }
// filterEven = function (x) {
//     return x % 2 == 0
// }
console.log(filter(myNumbers, filterOdd))
console.log(filter(myNumbers, filterEven))

function filter(numbers, callback) {
    const myArray = []
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x)
        }
    }
    return myArray
}
