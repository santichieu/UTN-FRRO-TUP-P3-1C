//find() & some ()


const foods = [
    {name: 'orange', type: 'fruit'},
    {name: 'banana', type: 'fruit'},
    {name: 'carrot', type: 'vegetable'},
    {name: 'pear', type: 'fruit'},
    {name: 'cabbage', type: 'vegetable'},
];

const vegetable = foods
.sort((a , b)=> a.name.localeCompare(b.name)) //esto funciona para mostrar cabbage
.find((food)=>food.type === 'vegetable')


console.log(vegetable)


const isVegetable = foods.some((food) => food.type === 'vegetable')


console.log(isVegetable)