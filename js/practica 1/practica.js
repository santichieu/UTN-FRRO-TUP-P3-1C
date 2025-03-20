let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
    ];
    

const names = input.map((person)=>person.name);

console.log(names);


    //ej 2
const filterAge = input
.filter((personAge) => personAge.age > 20 && personAge.age < 29)
.map((person)=>person.name);


console.log(filterAge)

const countries = [
    {country: "Argentina", population: 45538401},
    {country: "Alemania", population: 84211382},
    {country: "España", population: 47895872 },
    {country: "Italia", population: 59146260},
];

const sortedCountries = countries.sort((num1, num2) => num1.population - num2.population);

console.log(sortedCountries);

/* Estás a cargo de las velas de cumpleaños para el cumpleañero y decidiste que la
torta va a tener una vela por cada año de su edad total. Solo van a poder soplar las
velas más altas de la torta.
Tu objetivo es contar cuántas son las más altas de la torta
Ejemplo candles = [4, 4, 1, 3]
Las velas de mayor altura son de 4 de altura y son 2 en total. Por ende, la función
debe retornar 2 como valor*/ 


const candles =[4, 3, 4, 2, 1, 3, 4]


const canBlow = candles
.filter((candle) => candle >=4)

const countBlow = canBlow.length

console.log(countBlow)


