let Guest_List :string[] = ['Aqsa','Threem', 'Iqra'];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mrs. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
let absent_Guest :string ='Aqsa' ;
let new_Guest :string ='Kirn' ;

Guest_List[0] =new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mrs. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You\n\n')
}

console.log(` Mrs. ${absent_Guest} is not coming to the party.`)
