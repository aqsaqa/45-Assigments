//animals think at least three different animals  that have a comman charactistics 
//store the namme of these animal in a list and then use a for loop to print put the name of each animal
// modify your program to print a statement about each animal such as adog would make a great pet. 
//add a line at the end of your program starting what these animals have in comman .you
// could print a sencentce such as any of these animals would make a great pet.

let Animals: string[] =['dog','cat','rabbit'];

for(let Animal of Animals){
    console.log(`A ${Animal} would make a great pet.`);
}console.log(`any of these animals would make a great pet!`)