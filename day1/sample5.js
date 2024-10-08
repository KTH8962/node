function func1(callback) {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000);
}

function func2(callback) {
    setTimeout(() => {
        console.log(2);
        callback();
    }, 1000);
}

function func3(callback) {
    setTimeout(() => {
        console.log(3);
        callback();
    }, 1000);
}

function func4(callback) {
    setTimeout(() => {
        console.log(4);
        callback();
    }, 1000);
}

func1(() => {
    func2(() => {
        func3(() => {
            func4(() => {
                setTimeout(() => console.log("끝"), 1000);
            });
        });
    });
});