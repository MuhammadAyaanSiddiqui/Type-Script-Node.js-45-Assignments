var guest = ["Baber Azam", "Naseem Shah", "Rizwan"];
var message = 'Dear';
for (var i = 0; i < guest.length; i++)
    console.log("".concat(message, " ").concat(guest[i], ", I would like to invite you to dinner."));
var guestwhocantcome = guest[1];
console.log("Unfortunately, ".concat(guestwhocantcome, " can't make it to dinner."));
var newguest = 'Narmeen';
guest[1] = newguest;
for (var i = 0; i < guest.length; i++)
    console.log("".concat(message, " ").concat(guest[i], ", I would like to invite you to dinner."));
console.log("\nGood news! We found a bigger dinner table.");
guest.unshift("Ayaan");
guest.splice(2, 0, "Ibrahim");
guest.push("Mustafa");
for (var i = 0; i < guest.length; i++) {
    console.log("".concat(message, " ").concat(guest[i], ", I would like to invite you to dinner."));
}
