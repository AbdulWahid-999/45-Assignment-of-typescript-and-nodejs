"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
let magicians = ["Harry potter", "Ron Weasley", "Hermione Granger"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians);
