const fs = require("fs");
const lines = fs.readFileSync("./puzzle-input.txt").toString();

let total = 0;
const numbersMappings = {
  one: "one1one",
  two: "two2two",
  three: "three3three",
  four: "four4four",
  five: "five5five",
  six: "six6six",
  seven: "seven7seven",
  eight: "eight8eight",
  nine: "nine9nine",
};

for (let line of lines.split("\n")) {
  for (let num of Object.keys(numbersMappings)) {
    line = line.replaceAll(num, numbersMappings[num]);
  }
  const numbers = line.split("").filter((elem) => !isNaN(parseInt(elem)));
  total += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`);
}

console.log(total);
