function delay(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}

// await는 async function안에 존재해야한다.
async function run() {
    await delay(1000);
    console.log(1);
    await delay(1000);
    console.log(2);
    await delay(1000);
    console.log(3);
}

run();