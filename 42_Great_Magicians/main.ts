// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase
// the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.



let magicians :string [] = ["Harry Potter" , "Ron Weasley" , "Hermione Granger"];

function make_great(magicians: string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = "The Great " + magicians[i]
    }
}




function show_magicians(magicians :string[]) {
    for (let magician of magicians) {
       console.log(magician);
    }
}
make_great(magicians)
show_magicians(magicians)
