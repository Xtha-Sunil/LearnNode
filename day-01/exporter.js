const names = ["sunil", "linus", "xtha"];
const ages = [10, 11, 12, 13];

// console.log("Log exporter.js : " + names)
// console.log("Log exporter.js : " + ages)

//export single object
// module.exports = names

// Multiple export garnu parey object banauni
module.exports = { names, yearOld: ages };
