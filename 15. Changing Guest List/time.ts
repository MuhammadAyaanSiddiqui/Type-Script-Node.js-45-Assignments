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
