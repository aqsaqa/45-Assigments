"use strict";
// alien colors 3 turn your if else chain from exercie 5 4 into an if else chain.
let aliencolors = "green";
//if the alien is green ,print a message that the player earned 5 points.
//if the alien is yellow ,print a message that the player earned 10 points.
//if the alien is red,print a message that the player earned 15 points.
//version 1 of the program.
if (aliencolors === "green") {
    console.log("version 1:player earned 5 points.");
}
else if (aliencolors === "yellow") {
    console.log("player earned 10 points.");
}
else if (aliencolors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color.");
}
//version 2 of the program.
aliencolors = "yellow";
if (aliencolors === "green") {
    console.log("player earned 5 points.");
}
else if (aliencolors === "yellow") {
    console.log(" version 2:player earned 10 points.");
}
else if (aliencolors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color.");
}
//version 3 of the program.
aliencolors = "red";
if (aliencolors === "green") {
    console.log("player earned 5 points.");
}
else if (aliencolors === "yellow") {
    console.log("player earned 10 points.");
}
else if (aliencolors === "red") {
    console.log("version 3:player earned 15 points.");
}
else {
    console.log("please select right color.");
}
