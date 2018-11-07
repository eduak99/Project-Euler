// DP solution, linear time with constant space, better than recursive memorizaton method
const generateFibo = (x) => {
	let a = 1;
	let b = 1;
	let c = 1;
	for(let i = 2; i < x+1; i++)
	{
		c = a+b;
		a = b;
		b = c;
	}

	return c;
}

//generate array with fibonacci sequence numbers and removes all above 4kk
let arr = [...Array(50).keys()].map( number => generateFibo(number+1)).filter( (x) => {return x < 4e6 && x%2 === 0})
// sums all the numbers
let total = arr.reduce( (x,y) => {return x+y})

console.log(`Total: ${total}`)
