function describe_city(City, Country) {
    if (Country === void 0) { Country = "Pakistan"; }
    console.log("city ".concat(City, ", is in ").concat(Country, ". "));
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Multan");
describe_city("Riadh", "Saudia_Arabia");
