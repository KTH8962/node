const func2 = (name, age, callback) => {
    callback(name, age);
};

const func3 = (name, age) => {
    console.log(`${name}님의 나이는 ${age}입니다.`);
};

func2("홍길동", "30", func3);