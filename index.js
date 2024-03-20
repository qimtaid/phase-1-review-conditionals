9;
// => 9

('Hello, world!');
// => "Hello, world!"

false;
// => false

8 * 8;
// => 64

8 * 8;
// => 64

2 > 1;
// => true

const greeting = "Hello!";
let answer;

answer = 42;
// => 42

const fullName = 'Ada Lovelace';

fullName;
// => "Ada Lovelace"


{
    ('This line is a JavaScript statement nested inside a block statement!');

    // This is also a statement nested inside a block:
    5 * 5 - 5;

    // And so are these:
    const weCan = 'group multiple statements';

    const suchAs = 'these variable declarations';

    const insideA = 'block statement.';
}
// => 20

Boolean(false);
// => false

Boolean(null);
// => false

Boolean(undefined);
// => false

Boolean(0);
// => false

Boolean(NaN);
// => false

Boolean('');
// => false

Boolean(true);
// => true

Boolean(42);
// => true

Boolean('Hello, world!');
// => true

Boolean({ firstName: 'Brendan', lastName: 'Eich' });
// => true

if (condition) {
    // Block of code
}

const age = 30;

let isAdult;

if (age >= 18) {
    isAdult = true;
}
// => true

isAdult;
// => true

const age = 14;

let isAdult;

if (age >= 18) {
    isAdult = true;
}

isAdult;
// => undefined

const age = 14;

let isAdult;

if (age >= 18) {
    isAdult = true;
} else {
    isAdult = false;
}
// => false

isAdult;
// => false

const age = 26;

let isAdult;

age >= 18 ? (isAdult = true) : (isAdult = false);
// => true

isAdult;
// => true

const age = 26;
const isAdult = age >= 18 ? true : false;

isAdult;
// => true

const age = 6;
const isAdult = age >= 18;

isAdult;
//=> false

const age = 20;
const ageMessage = age >= 18 ? "Congratulations! You're an adult!" : "Enjoy your childhood while it lasts!";

ageMessage;
//=> "Congratulations! You're an adult!"

const age = 17;

const isAdult = (age >= 18) ? true : false;

const canWork = (age >= 16) ? (1 === 1) : (1 !== 1);

const canEnlist = (isAdult ? true : false);

isAdult;
// => false

canWork;
// => true

canEnlist;
// => false

const age = 20;

let isAdult, canWork, canEnlist, canDrink;

if (age >= 21) {
    isAdult = true;
    canWork = true;
    canEnlist = true;
    canDrink = true;
} else if (age >= 18) {
    isAdult = true;
    canWork = true;
    canEnlist = true;
} else if (age >= 16) {
    canWork = true;
}
// => true

isAdult;
// => true

canWork;
// => true

canEnlist;
// => true

canDrink;
// => undefined

const age = 17;

let isAdult, canWork, canEnlist, canDrink;

if (age >= 16) {
  canWork = true;

  if (age >= 18) {
    isAdult = true;
    canEnlist = true;

    if (age >= 21) {
      canDrink = true;
    }
  }
}

canWork;

const order = 'cheeseburger';

let ingredients;
if (order === 'cheeseburger') {
    ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
} else if (order === 'hamburger') {
    ingredients = 'bun, burger, lettuce, tomato, onion';
} else if (order === 'malted') {
    ingredients = 'milk, ice cream, malted milk powder';
} else {
    console.log("Sorry, that's not on the menu right now.");
}

const order = 'cheeseburger';

let ingredients;

switch (order) {
    case 'cheeseburger':
        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case 'hamburger':
        ingredients = 'bun, burger, lettuce, tomato, onion';
        break;
    case 'malted':
        ingredients = 'milk, ice cream, malted milk powder';
        break;
    default:
        console.log("Sorry, that's not on the menu right now.");
        break;
}


const age = 15;

let isTeenager;

switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        isTeenager = true;
        break;
    default:
        isTeenager = false;
}

const age = 25;

let isAdult, canWork, canEnlist, canDrink;

switch (true) {
    case age >= 21:
        canDrink = true;
    case age >= 18:
        isAdult = true;
        canEnlist = true;
    case age >= 16:
        canWork = true;
}
// => true

isAdult;
// => true

canWork;
// => true

canEnlist;
// => true

canDrink;
// => true









