// Imperative
const arr = [1, 2, 3, 4]
const arr2 = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
        arr2.push(arr[i])
    }
}

console.log(arr2) // [1, 3]

// Declarative
const numbers = [1, 2, 3, 4]
const oddNumbers = numbers.filter(number => number % 2)

console.log(oddNumbers) // [1, 3]