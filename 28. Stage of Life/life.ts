let age : string = "35";
if(age<2);{
    console.log("The person is Baby!");
}
else if(age > =2 && age< =4){
    console.log("That the person is a toddler.");
}
else if(age>=4 && age<=13){
    console.log("That the person is kid !")
}else if(age>=13 && age<=20){
    console.log("That the person is teenager.")
}else if(age>=20 && age<=65){
    console.log("That the person is an adult.");
}else if(age>=65 && age<=70){
    console.log("That the person is an elder.");
}else{
    console.log("Please select the Right age")
}