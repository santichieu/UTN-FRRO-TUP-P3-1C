const prices = [100, 200, 400];

const shipping = 5;

const taxes = 6;
const total = prices.reduce((acc, curr) => acc + curr, shipping + taxes)


console.log(total)