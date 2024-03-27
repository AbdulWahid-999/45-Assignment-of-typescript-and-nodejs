"use strict";
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "large", message = "I Love TypeScript") {
    console.log(`A ${size} shirt with the message: ${message}`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Love Javascrpit");
