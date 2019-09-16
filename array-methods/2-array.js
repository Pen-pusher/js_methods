var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
var count = "";
function findLongestWord(words) {
  words.forEach(item => {
    if (item.length > count.length) {
      count = item;

    }
  })
  console.log(count)
}
findLongestWord(words)

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
let sum = []
function sumArray(numbers1) {
  let a = numbers1.reduce((acc, cv) => {
    return acc += cv


  }, 0)
  return a / numbers1.length

}
sumArray(numbers1)





var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

// var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
// //Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
function average() {
  let b = numbers2.length;
  console.log(b)
  let a = numbers2.reduce((acc, cv) => {
    acc += cv
    
  }, 0)
  return acc / b
  console.log(a)
}

average()

var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.



