// multiplication game

const number1 = parseInt(Math.random() * 12 + 1);
const number2 = parseInt(Math.random() * 12 + 1);

const multiply = number1 * number2;
const equals = parseInt(prompt(`solve this answer ${number1} * ${number2} = `));

if (multiply === equals) {
  console.log(`You got the right answer ${number1} * ${number2} = ${multiply}`);
} else {
  console.log("You got the wrong answer better luck next time");
}
