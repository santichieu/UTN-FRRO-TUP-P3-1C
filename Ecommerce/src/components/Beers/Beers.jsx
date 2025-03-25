const beers = [
    {
    id: 1,
    beerName: "American",
    beerStyle: "IPA",
    price: 3,
    available: true,
    },
    {
    id: 2,
    beerName: "Argenta",
    beerStyle: "IPA",
    price: 4,
    available: false,
    },
    {
    id: 3,
    beerName: "Irish",
    beerStyle: "Red",
    price: 4,
    available: true,
    },
    {
    id: 4,
    beerName: "Scotish",
    beerStyle: "Red",
    price: 3,
    available: true,
    },
    {
    id: 5,
    beerName: "DeEssoCiTratta",
    beerStyle: "APA",
    price: 3,
    available: true,
    },
    {
    id: 6,
    beerName: "Santa APA",
    beerStyle: "APA",
    price: 3,
    available: true,
    },
    {
    id: 7,
    beerName: "German",
    beerStyle: "Pilsen",
    price: 1,
    available: true,
    },
    {
    id: 8,
    beerName: "London Porter",
    beerStyle: "Porter",
    price: 2,
    available: false,
    },
    {
    id: 9,
    beerName: "Scotish ALE",
    beerStyle: "Red",
    price: 5,
    available: false,
    },
    ];


import React from 'react'

const dolar = 1250


const Beers = () => {
  return (
    <>
    {
        beers.map((beer)=>(
          
           
           
           <div>
                <h2> {beer.beerName} </h2>
                <h1> {beer.beerStyle} </h1>
                <h2> ${beer.price * dolar} </h2>
                <h2> {beer.available} </h2>
            </div>
        
        ))}
    </>
  )
}




export default Beers


