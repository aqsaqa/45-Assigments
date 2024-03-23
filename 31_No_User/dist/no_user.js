"use strict";
// no user add an if test to exercise 28 to make sure the list of user is not empty
//if the list is empty,print the message we need to find some user.
//remove all of the username from your array and make sure the correct message is printed.
let userName = ['admiin', 'junaid', 'zeeshan', 'kamran', 'daniyal'];
if (userName.length === 0) {
    console.log('we need to find some user');
}
else {
    userName = [];
    console.log('all user names have bem removed. ' + userName.length);
}
