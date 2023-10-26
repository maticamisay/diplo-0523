const fs = require("fs");

const student = {
  name: "Matias",
  age: 24,
  city: "Santiago",
  country: "Chile",
  hobbies: ["music", "movies", "sports"],
  isMarried: false,
  scores: {
    math: 67,
    english: 78,
    science: 83,
  },
};

const studentStringified = JSON.stringify(student, null, 2);
fs.writeFileSync("./data.json", studentStringified, "utf8");

const studentReaded = fs.readFileSync("./data.json", "utf8");
const studentParsed = JSON.parse(studentReaded);

console.log("------------------------");
console.log(student);
console.log("------------------------");
console.log(studentStringified);
console.log("------------------------");
console.log(studentReaded);
console.log("------------------------");
console.log(studentParsed);
console.log("------------------------");
