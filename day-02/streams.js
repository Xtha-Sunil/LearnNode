// If the string data is very very big and takes tim to load we can use streams for this.

// By the help of streams we can use data before finish loading.

const { log } = require("console");
const fs = require("fs");

const readStream = fs.createReadStream("./assets/bigData.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./assets/writingBigData.txt");

// readStream.on("data", (chunk) => {
//   log("---------New Chunk-------------");
//   log(chunk);
//   writeStream.write("\n\n----New Chunk----\n\n");
//   writeStream.write(chunk);
// });

// Above process of reading then writing chunk by chunk we can do piping
readStream.pipe(writeStream);
