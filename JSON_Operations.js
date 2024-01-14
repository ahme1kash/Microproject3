const fs = require('fs');
const path = require('path');
var jsonPath = path.join(__dirname, '..', 'Microproject3', 'food.json');
var jsonString = fs.readFileSync(jsonPath, 'utf8');
jsonObj = JSON.parse(jsonString)
//? 1 -  List all  the food items.
// jsonObj.forEach((elem)=>console.log(elem))
// ?2 - List all the food items with category Vegetables.

jsonObj.forEach((elem)=> elem.category == "Vegetable"?console.log(elem):false)
// ?3 - List all the food items with category Fruit.
jsonObj.forEach((elem)=> elem.category == "Fruit"?console.log(elem):false)
// ?4 - List all the food items with category Grains.
jsonObj.forEach((elem)=> elem.category == "Grain"?console.log(elem):false)
// ?5 - List all the food items with category Nuts.
jsonObj.forEach((elem)=> elem.category == "Nuts"?console.log(elem):false)
// ?6 - List all the food items with category Dairy.
jsonObj.forEach((elem)=> elem.category == "Dairy"?console.log(elem):false)
// ?7 - List all the food items with category Protein.
jsonObj.forEach((elem)=> elem.category == "Protein"?console.log(elem):false)

// ?8 - List all the food items with calorie above 100
jsonObj.forEach((elem)=> elem.calorie > 100?console.log(elem):false)

// ?9 - List all the food items with calorie below 100
jsonObj.forEach((elem)=> elem.calorie < 100?console.log(elem):false)


// ?10 List all the food items with highest protien content to lowest.

 const sorted_desc = jsonObj.sort((a,b)=>b.protiens-a.protiens).map((elem)=>elem)
console.log(sorted_desc)

// ?10 List all the food items with lowest carb content to highest.

 const sorted_asc = jsonObj.sort((a,b)=>a.cab-b.cab).map((elem)=>elem)
console.log(sorted_asc)


