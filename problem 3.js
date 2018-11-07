let number = 600851475143;
let base = 1;

while (number != 1)
{
	base++;
	if ( number%base === 0)
	{
		number /= base;
	}
	
}

console.log(`Largest factor found: ${base}`)