const food = [
    {name: 'orange', type: 'fruit'},
    {name: 'banana', type: 'fruit'},
    {name: 'carrot', type: 'vegetable'},
    {name: 'pear', type: 'fruit'},
    {name: 'cabbage', type: 'vegetable'},
];

const vegetable = food
.sort((a , b)=> a.name.localeCompare(b.name))
.find((food)=>food.type === 'vegetable')


console.log(vegetable)