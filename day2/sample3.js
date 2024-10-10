function test() {
    console.log(`테스트 함수`);
}

setTimeout(function() {
    console.log(`테스트 함수`);
}, 1000);

setTimeout(() => console.log(`테스트 함수`), 1000);