const students = ['joy','juma','enock','35']
console.log(students);
students.push('rogers');
console.log(students);
students.unshift('kambale');
console.log(students);
students.pop();
console.log(students);
students.shift();
console.log(students);

// console.log(students.indexOf('Juma'));
console.log(students.includes('enock'));

students.splice(1, 0, 'musa');
console.log(students);

