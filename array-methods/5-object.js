// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)

function object(obj) {
  return obj;
}

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};

function student_properties() {
  console.log(student)
  console.log(String(student).length)
  console.log(delete student.rollno)
  console.log(student)
}
student_properties()


// 3. Write a function to get the length of an object.
// function student_properties() {
//   console.log(student)
//   console.log(String(student).length)
//   console.log(delete student.rollno)
//   console.log(student)
// }
// student_properties()

function student_properties(obj) {
  var count = 0;
  for (let i in obj) {
    count++

  } return count;
}
student_properties(student)
