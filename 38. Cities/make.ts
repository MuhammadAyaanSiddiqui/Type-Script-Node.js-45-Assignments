function describe_city(City: string , Country = "Pakistan"):void{
    console.log(`city ${City}, is in ${Country}. `);
} 
describe_city ("Karachi")
describe_city("Islamabad")
describe_city("Multan")
describe_city("Riadh","Saudia_Arabia")