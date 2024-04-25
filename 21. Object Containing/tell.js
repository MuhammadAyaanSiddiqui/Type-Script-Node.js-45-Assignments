var cities = [
    { name: "Tokyo", country: "Japan", population: 13929286 },
    { name: "New York City", country: "USA", population: 8175133 },
    { name: "Paris", country: "France", population: 2140526 },
    { name: "Beijing", country: "China", population: 21542000 }
];
console.log("Information about cities:");
for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
    var city = cities_1[_i];
    console.log("City: ".concat(city.name, ", Country: ").concat(city.country, ", Population: ").concat(city.population));
}
