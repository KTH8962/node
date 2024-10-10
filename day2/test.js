function delay(time) {
    return new Promise((resolve) => {setTimeout(resolve, time)});
}

delay(1000)
    .then(() => {
        console.log("첫번째");
        return delay(1000);
    })
    .then(() => {
        console.log("두번째");
    });

function func1(callback, x, y) {
    callback(x, y);
}

func1((x, y) => console.log (`func1 ${x + y}`), 2, 3);

const func2 = (name, age, callback) => {
    callback(name, age);
};

func2("홍길동", "30", (name, age) => console.log(`${name}님의 나이는 ${age}입니다.`));

const calc = require("./test_module");

calc.sum(3, 5);
calc.minus(6, 1);