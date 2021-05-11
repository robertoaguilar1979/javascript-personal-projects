function numberOrString(x) {
  return typeof x === "number" || typeof x === "undefined";
}

console.log(numberOrString(true));
console.log(numberOrString(65));
console.log(numberOrString(undefined));
