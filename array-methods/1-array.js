// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];
var all_total = [];

// Use the above two arrays and practice array methods
numbers.forEach(num => {
all_total = num * 10

})

// map
var all_total = numbers.map(num => num * 10)
// filter
var all_total = numbers.filter(num => num % 2 == 0)
// Find largest number in numbers
  // using spread operator
  Math.max(...numbers)
// Find longest string in strings
var strings = ["this", "is", "a", "collection", "of", "words"];
var count = "";
function myFunction(item) {
  if (item.length > count.length) {
    count = item;
  }
}
strings.forEach(myFunction);
console.log(count, count.length)
// Find all the even numbers
let all_total = numbers.filter(item => item % 2 == 0)

// Find all the odd numbers
let all_total = numbers.filter(item => item  % 2 !== 0) 

// Find all the words that contain 'is' use string method 'includes'
let all_total = strings.map(item => {
  if (item.includes("is")){
    console.log(item)
  }
})
// Find all the words that contain 'is' use string method 'indexOf'
let all_total = strings.filter(item => {
  if (item.indexOf("is") >= 0) {
    return (item)
  }
})
console.log(all_total)
// Check if all the numbers in numbers array are divisible by three use array method (every)
let all_total = numbers.every(item => {
  if (item % 3 == 0) {
    return item
  }
})
console.log(all_total)

//  Sort Array from smallest to largest
let all_total = numbers.sort((a, b) => a - b)
console.log(all_total)
// Rem0ove the last word in strings
strings.pop()
// Add a new word in the array
strings.push("hello world")
console.log(strings)


// Remove the first word in the array
let all_total = strings.pop()
console.log(all_total)
// Place a new word at the start of the array use (unshift)

strings.unshift("hello world")
console.log(strings)
// Make a subset of numbers array [18,9,7,11]
let all_total = [];
function collect() {
  for (let i = 0; i < numbers.length / 4; i++) {
    all_total.push(numbers.splice(0, 4))
    return (`i am subset ONE "${all_total}"`)


  }


}
collect()
let all_tottal = numbers
let all = []
function collect_all() {
  for (let i = 0; i < all_tottal.length / 4; i++) {
    all.push(numbers.splice(0, 4))
    return (`i am subset TWO "${all}"`)


  }
}
collect_all()
console.log(`And i am the REMAINING  "${numbers}"`)// Make a subset of strings array ['a','collection']

// Replace 12 & 18 with 1221 and 1881

// Replace words with string in strings array

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

// Create new array with firstname and lastname

// Sort the array created above alphabetically
