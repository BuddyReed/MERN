const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
// randomCar will output Tesla
console.log(randomCar)
// otherRandomCar will output Mercedes
console.log(otherRandomCar)

//______________________________

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// This input will through an error because name is mapped
// to otherName
// console.log(name);
// This will output Elon
console.log(otherName);


//_____________________________________________

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output

// The output will be 12345 as it will output the string that is assigned to
// to the variable
console.log(password);
// The ourput will be undefined. The person object doesn't have a password variable. 
console.log(hashedPassword);


//____________________________________________

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
// false will be the output as they aren't equal
console.log(first == second);
// true will be the output as they are equal
console.log(first == third);

//____________________________________________

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output

// The key will output value
console.log(key);
// The secondKey will output the full array [1,5,1,8,3,3]
console.log(secondKey);
// The secondKey[0] will output 1
console.log(secondKey[0]);
// The willThisWork will output 5
console.log(willThisWork);




