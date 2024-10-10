const test = (callback, time) => setTimeout(callback, time);

// test 함수를 만들어서 1초뒤에 콜백함수 실행되도록
test(() => console.log("첫번째 함수"), 1000);