const { log } = require("console");
const fs = require("fs");

// reading the file
fs.readFile("summary.md", (err, data) => {
  if (err) log("err");
  log(data.toString());
});

// writing to file
fs.writeFile("writeFile.txt", "King Sunil.", () => {
  log("written to file.");
});

// making and removing with directiories

if (!fs.existsSync("./demoDir")) {
  fs.mkdir("./demoDir", (err) => {
    if (err) log(err);
    log("Made directory complete");
  });
} else {
  fs.rmdir("./demoDir", (err) => {
    if (err) log(err);
    log("Delete folder");
  });
}

// play with files
if (fs.existsSync("demoFile.txt")) {
  fs.unlink("demoFile.txt", (err) => {
    log(err);
  });
  log("File deleted");
}
