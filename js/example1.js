// filter & map

const numbers = [1, 32, 43, -6, 5, -11];

const evenNumbers = numbers.filter((number) => number % 2 === 0);


const mappedNumbers = numbers.map((number)=> number %2 === 0 ? 'par' : 'impar');

console.log("Esto es filter", evenNumbers); // "Crea un nuevo arreglo con los numeros que coinciden con la condicion"


console.log("Esto es map", mappedNumbers); //Devuelve valores booleanos, muestra el resultado



const food = [
        {name: "Pizza", category: "Fast Food", price: 300, stock: true},
        {name: "Salad", category: "Healthy", price: 150, stock: true},
        {name: "Burger", category: "Fast Food", price: 500, stock: true},
        {name: "Sushi", category: "Healthy", price: 200, stock: false},
        {name: "Fries", category: "Fast Food", price: 400, stock: false},
        
];

const products = food
.filter((product)=> product.stock)
.map((product) => `${product.name} $${product.price}`);


console.log(products);
