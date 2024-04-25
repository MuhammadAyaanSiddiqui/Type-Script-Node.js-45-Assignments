let guest: string[] = ["Baber Azam", "Naseem Shah", "Rizwan"];
let message: string = 'Dear';
for (let i = 0; i < guest.length; i++)
    console.log(`${message} ${guest[i]}, I would like to invite you to dinner.`);
let guestwhocantcome: string = guest[1];
console.log(`Unfortunately, ${guestwhocantcome} can't make it to dinner.`);

let newguest: string = 'Narmeen';
guest[1] = newguest;
for (let i = 0; i < guest.length; i++)
    console.log(`${message} ${guest[i]}, I would like to invite you to dinner.`);

console.log("\nGood news! We found a bigger dinner table.");

guest.unshift("Ayaan");
guest.splice(2,0,"Ibrahim");
guest.push("Mustafa");
for (let i = 0; i < guest.length; i++) {
    console.log(`${message} ${guest[i]}, I would like to invite you to dinner.`);
}
console.log("Sorry we get the big Dinning tabble , so only two guest are invited")
while(guest.length > 2){
    let  removeGuest =guest.pop();
    console.log(removeGuest,"Sorry you not invited due to sufficient space")
    
}
