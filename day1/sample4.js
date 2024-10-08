// 2초후에 숫자 '1'을 콘솔로 출력하세요. (setTimeout, 화살표 함수)

// console.log(0);
// setTimeout(() => console.log(1), 2000);
// console.log(2);

// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3)
//         }, 1000);
//     }, 1000)
// }, 1000);

for(let i = 1; i < 4; i++){
    setTimeout(() => console.log(i), i * 1000);
}