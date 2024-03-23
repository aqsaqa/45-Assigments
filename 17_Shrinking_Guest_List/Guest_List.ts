let Guest_List :string[] = ['Aqsa','Threem', 'Iqra'];

// for(let i=0; i<Guest_List.length; i++){

    // console.log('Dear Mrs. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest :string ='Aqsa' ;
let new_Guest :string ='Kirn' ;
Guest_List[0] =new_Guest ;
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mrs. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You\n\n')
// }
console.log(` Mrs. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find big table so we are inviting 3 more guests.')
//array me 3 guest add kiyen hn.
Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0 , 'Maryam nawaz') ;
Guest_List.push('Bilawal Bhutto Zardari');
// yahn pr mene 6 guest k aarry ko print krwaya hy.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mrs. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You\n\n')
    }
// Sorry guest for not inviting.
console.log('\nSorry we can not  arrange abig table , only two peoples will be invited.');
// yahan per mene guest remoe kr diye hn.
while(Guest_List .length > 2){
 let Remove_Guest = Guest_List.pop();
 console.log(`Sorry Mrs. ${Remove_Guest}, You are not invited for dinner.;`);
}
//Hamare bache howe 2 invited guest.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mrs. ' + Guest_List[i] + ',\n\nYoy are still invited.\n\nThank You\n\n')
    }
// mene sary guest array sy remove kr diye .
    Guest_List.splice(0, 2)

    console.log(Guest_List);


