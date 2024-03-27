"use strict";
let Guest_List = ['Wahid', 'Faizan', 'Ali'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\nIt Is Our Pleasure To Invite You In Our Party.\n\nThank You!\n\n');
}
let absent_Guest = 'Wahid';
let new_Guest = 'Hasnain';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\nIt Is Our Pleasure To Invite You In Our Party.\n\nThank You!\n\n');
}
console.log(`Mr.${absent_Guest} Is Not Coming To The Party.`);
