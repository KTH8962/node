// promise (pending, fulfilled(success), rejected)(fail)) - 대기, 이행, 거부
var promise = new Promise((resolve, reject) => {
    var flg = false;
    setTimeout(() => {
        if(flg) {
            resolve("통신 성공");
        } else {
            reject("통신 실패!!");
        }
    }, 1000);
});

promise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    })