const fs = require("fs");

const route = "My notes/Files/MyFirstFile.txt";

fs.writeFile(route, "Wow, that is the first text I typed", function (err) {
  if (err) throw err;
  console.log("File successfully created and fulled");
});

fs.readFile(route, (err, data) => {
  if (err) throw err;
  console.log(`Data readed from file: "${data.toString()}"`);
});


fs.