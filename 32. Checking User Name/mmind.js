var current_users = ["Abbas", "Shaqran", "Admin", "Sabir", "Naeem"];
var new_users = ["Saeed", "baber", "ahmed", "Amir", "Admin"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to new username."));
    }
    else {
        console.log("".concat(newUser, " is availabe."));
    }
});
