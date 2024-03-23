"use strict";
let current_users = ['taha', 'daniyal', 'john', 'hamza', 'iqra'];
let new_users = ['bilal', 'taha', 'dawood', 'jameel', 'hamza'];
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available.please write a different username`);
    }
    else {
        console.log(`username ${newUsername} is available.`);
    }
});
