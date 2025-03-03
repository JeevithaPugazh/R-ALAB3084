// --- PART 1 ---
//Refactoring Old Code

const inputStr =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

strRows = inputStr.split("\n");
let result = [];
// Refactoring old code using forEach method
strRows.forEach((strRow) => {
  cells = strRow.split(",");
  result.push(cells);
});
console.log("--- PART 1 and  ---")
console.log(result)
// ---- PART 2
// Storing a row in to array to change it to 2d array
let headers = result[0];
let objectsArray = [];
for (let i = 1; i < result.length; i++) {
  let rowObject = {};
  for (let j = 0; j < headers.length; j++) {
    rowObject[headers[j].toLowerCase()] = result[i][j];
  }
  objectsArray.push(rowObject);
}


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


// --- PART 5 ---

let rows = []
 let keyList = Object.keys(finalResult[0])
let capitalizedRow = [];
 for (let i = 0; i < keyList.length; i++) {
 let capitalised = keyList[i].charAt(0).toUpperCase() + keyList[i].slice(1);
 capitalizedRow.push(capitalised)
}
rows.push(capitalizedRow.join())
// rows.push(capitalization)
for(i=0;i<finalResult.length;i++){
  let valueRow = Object.values(finalResult[i])
  rows.push(valueRow.join())
   
}
console.log(rows.join("\\n"))