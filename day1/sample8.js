function delay(callback, time){
    setTimeout(callback, time);
}

delay(() => {
    console.log(1);
    delay(() => {
        console.log(2);
        delay(() => {
            console.log(3);
            delay(() => {
                console.log(4);
                delay(() => {
                    console.log(5);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

