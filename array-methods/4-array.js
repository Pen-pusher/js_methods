  var data = [
    {
      name: "Butters",
      age: 3,
      type: "dog"
    },
    {
      name: "Lizzy",
      age: 6,
      type: "dog"
    },
    {
      name: "Red",
      age: 1,
      type: "cat"
    },
    {
      name: "Joey",
      age: 3,
      type: "dog"
    },
    {
      name: "Pochi",
      age: 3,
      type: "dog"
    }
  ];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here
data.forEach(item => {
  //   console.log(item.type)
  if (item.type == "dog") {
    //     console.log (item.age * 7);
    a = item.age * 7
    //     console.log( a)
    b += a
  }


})
console.log(b)
// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.

// Solution 105
