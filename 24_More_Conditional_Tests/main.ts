 
 
// Equality And Inequality Test 1
console.log("Equality test with strings: " , "Apple" === "Apple");
// Equality And Inequality Test 2
console.log("Inquality test with strings: " , ("Apple" as string) === "Orange");

// Tests using the lower case function
console.log("Lower Case function tests: ", "HELLO".toLowerCase() === "hello");

// Numerical tests involving equality 
console.log("Equality test with numbers: ", 26 === 26);
// Numerical tests involving inequality
console.log("Inequality test with numbers: ", (26 as number) === 36);

// greater than Test
console.log("Greater than test: ", 10 > 5);
// less than Test
console.log("less than test: ", 5 > 10);

// greater than or equal to 
console.log("Greater than and equal to test: ", 10 >= 10);
// and less than or equal to
console.log("less than or equal to test: ", 15 < 5 );

// Tests using "and" operator
console.log("And operator test: ", 5===5 && 10 > 5);
// Tests using "or" operator
console.log("or operator test: ", 5===5 || false);

// Test whether an item is in a array
const fruits :string[] = ["kiwi", "banana","mango"]
console.log('Test "mango" in the array:', fruits.includes("mango"));
// Test whether an item is not in a array
console.log('testing "orange" is not in array: ', fruits.includes("orange"));