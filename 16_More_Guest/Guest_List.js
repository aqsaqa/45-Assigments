"use strict";
let Guest_List = ['Aqsa', 'Threem', 'Iqra'];
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mrs. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest = 'Aqsa';
let new_Guest = 'Kirn';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mrs. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You\n\n');
}
console.log(` Mrs. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find big table so we are inviting 3 more guests.');
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Maryam nawaz');
Guest_List.push('Bilawal Bhutto Zardari');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mrs. ' + Guest_List[i] + ' ,\n\nit is our pleasure to invite you in our party.\n\nThank You\n\n');
}
