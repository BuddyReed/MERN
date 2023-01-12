// Finding a random number using an arrow function. 

let gamesList = ['God of War', 'Mario Kart', 'Connect 4', 'Crusader Kings']

const randomGame = function () {
    let randNum = Math.floor(Math.random() * 4)
    console.log(gamesList[randNum])
}

const randomGameArrow = () => {
    let randNum = Math.floor(Math.random() * 4)
    console.log(gamesList[randNum])
}

const addName = (name) => {
    return 'Welcome, prestigious vistor:' + name;
}

// arrow functions can implicitly return when runninh a single line of code.
const implicitWelcome = (name) => 'Welcome, prestigious vistor:' + name;


let num = 15;

const isNumEven = (num) => num % 2 == 0
console.log(isNumEven())




randomGame();
randomGameArrow();
addName('Buddy');
implicitWelcome('Greg');
