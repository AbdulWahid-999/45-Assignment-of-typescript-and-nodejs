// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned to 
// make sure all the information was stored correctly.


function describeCar(manufacturer: string, model: string, options: { [key: string]: any  }): 
object{
    const car = {
      manufacturer: manufacturer,
      model: model,
      ...options
    }
  
    return car;
  }
  
  const myCar = describeCar('subaru', 'outback', { color: "black" ,tow_package: true });
  console.log(myCar);