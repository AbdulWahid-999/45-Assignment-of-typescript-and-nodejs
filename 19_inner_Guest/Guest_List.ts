let Guest_List :string[] =['Wahid','Faizan','Ali'] ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr.' +Guest_List[i]  + ',\n\nIt Is Our Pleasure To Invite You In Our Party.\n\nThank You!\n\n')
// }

let absent_Guest :string = 'Wahid' ;
let new_Guest :string = 'Hasnain' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr.' +Guest_List[i]  + ',\n\nIt Is Our Pleasure To Invite You In Our Party.\n\nThank You!\n\n')
// }
// console.log(`Mr.${absent_Guest} Is Not Coming To The Party.`)
// console.log('\nGood News! We Find Big Table So We Are Inviting 3 More Guests. ') ;

//array me 3 or guest add kiya hain
Guest_List.unshift('Umer');
Guest_List.splice(2 , 0 , 'Hamza') ;
Guest_List.push('Shakir') ;

// yahan pr 6 guest print krwaye
//for(let i=0; i<Guest_List.length; i++) { 
    // console.log('Dear Mr.' +Guest_List[i]  + ',\n\nIt Is Our Pleasure To Invite You In Our Party.\n\nThank You!\n\n');
//}
//sorry message to guest for not inviting
// console.log('\nsorry we can not arrange big table, only two peoples will be invited.');

// // yahn pr meina guest remove kiya hain
while(Guest_List.length > 2){
let remove_Guest = Guest_List.pop();
// console.log(`\nSorry Mr, ${remove_Guest},\nYour Are Not Invited.`);
 }

// bache hue 2 invited guest
for(let i=0; i<Guest_List.length; i++){
    // console.log('\nDear Mr.' +Guest_List[i]  + ',\n\nYou Are Still Invited.\n\nThank You!\n\n');
}

//mene saray guest yahan se remove krdiya
Guest_List.splice(0,2)
console.log(Guest_List);

console.log(`total number of guests are ${Guest_List.length}`)