const path = require("path");

var txtPath = path.join(__dirname, "test", "text.txt");
console.log(txtPath);

var dirPath = path.dirname("C:\\Users\\tj-bu-708-00\\node\\day2\\test\\text.txt");
console.log(dirPath);

var filename = path.basename("C:\\Users\\tj-bu-708-00\\node\\day2\\test\\text.txt");
console.log(filename);

var filename2 = path.basename("C:\\Users\\tj-bu-708-00\\node\\day2\\test\\text.txt", ".txt");
console.log(filename2);