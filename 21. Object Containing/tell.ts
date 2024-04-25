let cities: { name: string, country: string, population: number }[] = [
    { name: "Islamabad", country: "Pakistan", population: 23124598 },
    { name: "New York", country: "USA", population: 8175133 },
    { name: "Paris", country: "France", population: 2140526 },
    { name: "Beijing", country: "China", population: 21542000 }
];

console.log("Information about cities:");

for (let city of cities) {
    console.log(`City: ${city.name}, Country: ${city.country}, Population: ${city.population}`);
}