function delay(time){
    return new Promise((resolve) => setTimeout(resolve, time));
    
    // var promise = new Promise({
    //     (resolve) => setTimeout(resolve, time)
    // });
    // return promise;
}

delay(1000)
    .then(() => {
        console.log(1);
        return delay(1000);
    })
    .then(() => {
        console.log(2);
        return delay(1000);
    })
    .then(() => {
        console.log(3);
    });