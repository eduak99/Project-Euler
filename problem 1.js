//initializes an array with numbers from 1 to 1000
let arr = [...Array(1000).keys()]

let filtered = arr.filter( (number) => {return number%3 === 0 || number%5 === 0})

let result = filtered.reduce( (x,y) => {return x+y})

console.log(`Total: ${result}`)
