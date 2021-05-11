const numberOfDays = Number(prompt("how many days would you like to average?"));
let weight = 0;
let sum = 0;

for (let i = 0; numberOfDays > i; i++) {
  weight = parseFloat(prompt("what is your weight?"));

  sum += weight;
}

let totalSum = parseFloat(sum / numberOfDays);

console.log(`your average weight is ${totalSum}`);
