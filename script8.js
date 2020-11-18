//Exercise 1 ****************************************
var foods = ["potatoes", "chocolate", "garlic", "onions", "french fries", "mushrooms"]
foods.splice(2,1)
console.log(foods)
foods.shift()
console.log(foods)
foods.pop()
console.log(foods)
foods.unshift("carrots")
console.log(foods)
foods.push("peas")
console.log(foods)
//Exercise 2 ****************************************
var prices = [19,31,17,22,99,12,35,46]

var output = prices.indexOf(17)
console.log(output)

output = prices.includes(50)
console.log(output)
function getBigprices(price)
{
  return price>30;

}
var bigPrices = prices.filter(getBigprices)
console.log(bigPrices)
//Exercise 3 ************************************************
var ages = [5,24,10,8,11,14,98]
var moreAges = [11,12,13]
//Excercise 4 **********************************************
var nums = [-9,4,-7,2,6,-4,7,-1,4,1,2,0,-2]
var i;
for (i=0; i<nums.length; i++){
  if (nums[i] < 0){
    console.log(nums[i])
  }
}
//Review Exercise *********************************************
var foodsILike = []


//create variables for the html elements with ids: "inputFood", "foodList" and "addButton"

//create a function which:
//adds the input from the text box to the foodsILike array
//sets the innerHTML of the "foodList" variable to the foodsILike array
//add an event listener to the button which calls above function on each click
var animals = ["cat","dog","owl"]
animals.push("turtle")
animals.unshift("lion")
console.log(animals)
var animals = ["lion", "cat", "dog", "owl", "turtle"]
animals.pop()
console.log(animals)
var animals = ["lion", "cat", "dog", "owl", "turtle"]
animals.shift()
console.log(animals)
