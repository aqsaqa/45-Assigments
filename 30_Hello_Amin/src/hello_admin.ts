//hello admin make a array of five or more username including the name 'admin' imagine 
//you are writting codethat will print a greeting to each user after they log in to a
//website loop through the array and print a greeting to each user:
// if the user is 'admin' print a special greeing such as hello admin would you like 
//to see a status report?
//otherwise print a generic greeting such as hello eric, thank you for logging in again.

const userName:string[]= ['admin','bugs bunny','daffay duck','tweety','bunny']

for(let i=0; i<userName.length; i++){
    if(userName[i] === 'admin')
    {
        console.log('hello admin, would you like to see a status report?')
    }
    else{
        console.log(`hello ${userName[i]}, thank you for logging in again`)
    }
}