"use strict";
let personname = '';
personname = prompt('What is your name ?') || '';
if (personname !== null && personname !== '') {
    alert(`Hello ${personname}, would you like to learn some python today?`);
}
else {
    alert(`you hae fill to your name !`);
}
