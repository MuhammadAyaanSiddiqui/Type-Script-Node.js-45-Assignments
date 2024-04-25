function sandwich(... items:string[] ):void{
    console.log("Sandwich order:")
for (let i=0; i<items.length; i++){
    console.log(`- ${items[i]}`)
}
}
console.log("Well come to the sandwich Point in");
sandwich("Cheese","Mayo");
sandwich("Chicken","Fajita","Malai boti");
sandwich("Beef","Tikka");