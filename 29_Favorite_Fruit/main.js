"use strict";
// Favorite Fruit: Make a array of your favorite fruits,and then write a series of
// independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
const favorite_fruits = ['apple', 'banana', 'cherry'];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas.
if (favorite_fruits.includes('apple')) {
    console.log('You really like apples!');
}
if (favorite_fruits.includes('banana')) {
    console.log('You really like bananas!');
}
if (favorite_fruits.includes('cherry')) {
    console.log('You really like cherries!');
}
if (favorite_fruits.includes('orange')) {
    console.log('You really like oranges!');
}
if (favorite_fruits.includes('grape')) {
    console.log('You really like grapes!');
}
