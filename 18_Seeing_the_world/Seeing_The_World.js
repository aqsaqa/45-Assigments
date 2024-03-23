"use strict";
//Store the location in a array .Make sure the array is not alphabetical order.
let places = ['Italy', 'Karachi', 'Islamabad', 'badshahi masjid', 'lahore'];
//print your array in its original order.
console.log('orignal' + places.sort());
//print your array in alphabetical order without modifing the actual list.
console.log('copy' + [...places]);
//show that your array is still in its original order by printing it.
console.log('orignal' + places.sort());
//print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy' + [...places].sort().reverse());
//show that your array is still in its original order by printing it again.
console.log('original' + [...places]);
//reverse the order in your list. print the array to show that its order has changed.
console.log('orignal' + places.reverse());
// revverse the order of your list again. print the list to show it,s back to its original order.
console.log('orignal' + places.reverse());
//sort your array so its stored in alphabatical order. print the array to show that its order has been changed.
console.log('orignal' + places.sort());
//sort your array so it,s stored in reverse alphabatical order. print the list to show that its order has changed.
console.log('orignal' + places.sort().reverse());
