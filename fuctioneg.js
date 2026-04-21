let student = {
  name: "Amina",
  age: 21
}
student.grade = 10

for (let key in student) {
  console.log(key + ": " + student[key])
}
// console.log(student)