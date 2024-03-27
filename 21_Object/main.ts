// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

interface person{
    name :string,
    age :number, 
    nationality :string, 
    student :boolean} ; 

let person :person = {
    name : "wahid", 
    age : 19,
    nationality : "pakistani",
    student : true ,
};
console.log(person);