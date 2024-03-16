// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.


const magiciansnames = ["Erich","John", "David"]
function show_magicians(magiciansnames: string = "") {
    for (const name of magiciansnames) {
        console.log(`${name}`);
    }
}
function make_great(magicians: string = "") {
    const great_magicians = magiciansnames.map( make_great=> `Hello ${magiciansnames}`);
    return great_magicians;
}
const greatmagicianNames: string[] = make_great(`${magiciansnames}`);
console.log("original magicians:");
show_magicians(`${magiciansnames}`);
console.log("\n original magicians:");
show_magicians(`${magiciansnames}`);

// // Task 44. Sandwiches: Write a function that accepts a array of items a person wants
// // on a sandwich. The function should have one parameter that collects as many
// // items as the function call provides, and it should print a summary of the sandwich
// // that is being ordered. Call the function three times, using a different number
// // of arguments each time.

function makeSanwichs(...item: string[]): void {
  console.log("sandwhichs summary:");
  if (item.length === 0) {
    console.log("-You ardered an empty sandwich please order some items.");
  } else {
    item.forEach((item, i) => {
      console.log(` ${i + 1}. ${item}`);
    });
  }
  console.log("\n");
}

makeSanwichs("Veggie", "Hummus");
makeSanwichs("Chickpea Salad", "Cream Cheese");
makeSanwichs("White Bean", "Avocado");
makeSanwichs("Pickle Sub", "Turkey & Cheddar");

// Task 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature.
// Print the Object that’s returned to make sure all the information was
// stored correctly.

function createCar(
  manufacturer: string,
  model: string,
  ...properties: [string, any][]
): any {
  const car: any = {
    manufacturer,
    model,
  };
  for (const [key, value] of properties) {
    car[key] = value;
  }
  return car;
}
const mycar: string = createCar(
  "Kia",
  "Toyota",
  ["color", "White"],
  ["optionalFeatures", "bloutProof"]
);

console.log(mycar);
