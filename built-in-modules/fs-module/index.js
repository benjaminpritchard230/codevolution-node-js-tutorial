// const fs = require("node:fs");

// console.log("first");

// const fileContents = fs.readFileSync("./file.txt", "utf-8");

// console.log(fileContents);
// console.log("second");

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// console.log("third");

// fs.writeFileSync("./greet.txt", "Hello world");

// fs.writeFile("./greet.txt", "hello bold", { flag: "a" }, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file written");
//   }
// });

const { read } = require("node:fs");
const fs = require("node:fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("./file.txt", "utf-8");
  } catch (error) {
    console.log(error);
  }
}

readFile();

console.log("first");
console.log("second");

fs.readFile("./file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
