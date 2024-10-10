const fs = require("fs");

fs.readFile("text.txt", "utf-8" , (err, data) => {
    if(err) {
        console.log(`오류 발생 : ${err}`);
        return;
    }
    //console.log(data);
    fs.writeFile("text2.txt", `${data} \n추가`, (err) => {
        if(err) {
            console.log("저장 실패");
            return;
        }
        console.log("저장 성공");
    });
});