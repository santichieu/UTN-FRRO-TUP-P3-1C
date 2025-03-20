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