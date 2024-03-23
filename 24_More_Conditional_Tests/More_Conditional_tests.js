"use strict";
//equality and inequality test. 1
console.log("Equality test with strings: ", "Apple" === "Apple");
//equality and inequality test. 2
console.log("Inequality test with strings: ", "Apple" != "Orange");
//tests using the lower case function 3
console.log("Lower Case function test:", "HELLO".toLowerCase() === "hello");
//numerical tests involving equality and inequality,4
console.log("Equality test with numberas: ", 26 === 26);
//numerical tests involving  inequality,5
console.log("Inequality test with number:", 26 != 35);
//greater than test 6
console.log("Greater than test: ", 10 > 5);
//less than test 7
console.log("less  than test: ", 5 < 10);
//greater than or equal to.8
console.log("Greater than and equal to test :", 10 >= 10);
//and less than or equal to.9
console.log("less than or equal to test:", 5 <= 10);
// tests using "and "  operators 10
console.log("And operator test :", 5 === 5 && 10 > 5);
//tests using "or" operators 11.
console.log("or operators test:", 5 === 5 || false);
//test weather an item is in a array.12
const fruits = ['peach', 'banana', 'Apple'];
console.log('test "peach" in the array:', fruits.includes("peach"));
//test weather an item is  not in a array.13
console.log('testing"Apple"is not in array: ', fruits.includes('Apple'));
