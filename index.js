// --- PART 1 ---
//Refactoring Old Code

const inputStr =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

strRows = inputStr.split("\n");
let result = [];
// Part 1 --- (Refactored old code using forEach() method)

strRows.forEach((strRow) => {
  cells = strRow.split(","); 
  result.push(cells); // Part 2 --- Stored a row into an array to convert it into a 2D array.
});
console.log(" ")
console.log("--- Part 2 ---")
console.log(result)


// Part 3 -- Converted array items into objects and stored them in an array.

let headers = result[0];// accessing 1st row(heading) in 2d array
let objectsArray = [];
for (let i = 1; i < result.length; i++) {
  let rowObject = {};
  for (let j = 0; j < headers.length; j++) {
    rowObject[headers[j].toLowerCase()] = result[i][j];
  }
  objectsArray.push(rowObject);
}
console.log(" ")
console.log("--- Part 3 ---")
console.log(objectsArray) 


// ---- PART 4 ----

finalResult = [
  {
    id: "42",
    name: "Bruce",
    occupation: "Knight",
    age: "41",
  },
  {
    id: "57",
    name: "Bob",
    occupation: "Fry Cook",
    age: "19",
  },
  {
    id: "63",
    name: "Blaine",
    occupation: "Quiz Master",
    age: "58",
  },
  {
    id: "98",
    name: "Bill",
    occupation: "Doctor’s Assistant",
    age: "26",
  },
];

finalResult.pop(); // Removed the last element from the sorted array.
finalResult.splice(1, 0, { 
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
}); // Inserted the object at index 1:

finalResult.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }) //Added the object to the end of the array
console.log(" ")
console.log("--- Part 4 ---")
console.log(finalResult)


// --- PART 5 ---

let rows = []
 let keyList = Object.keys(finalResult[0]) //Accessing keys using the Object.keys() method.
let capitalizedRow = [];
 for (let i = 0; i < keyList.length; i++) {
 let capitalised = keyList[i].charAt(0).toUpperCase() + keyList[i].slice(1);
 capitalizedRow.push(capitalised) // Capitilization
}
rows.push(capitalizedRow.join())

for(i=0;i<finalResult.length;i++){
  let valueRow = Object.values(finalResult[i]) //Accessing values using the Object.values() method.
  rows.push(valueRow.join())
   
}
console.log(" ")
console.log("--- PART 5 ---")
console.log(rows.join("\\n")) // used join method to join keys and all values and changed array back to CSV format