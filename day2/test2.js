function func1(callback, x, y) {
    callback(x, y);
}

func1(sum, 2, 3);

function sum(x, y){
    console.log(x + y);
}