const fs = require("fs");

// fs.readdir(경로, callback)
fs.readdir("./", (err, files) => {
    if(err) {
        console.log(`오류발생! : ${err}`);
        return;
    }
    console.log(files);
});