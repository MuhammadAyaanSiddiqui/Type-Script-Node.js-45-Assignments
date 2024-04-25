let current_users: string []=["Abbas","Shaqran","Admin","Sabir","Naeem"];
let new_users: string [] = ["Saeed","baber","ahmed","Amir","Admin"];
new_users.forEach((newUser)=> {
    if(current_users.some(
        (current_users) => current_users.toLowerCase()=== newUser.toLowerCase()
    )
    ){
        console.log(`${newUser} will need to new username.`);
    }else {
        console.log(`${newUser} is availabe.`)
    }

    });
 