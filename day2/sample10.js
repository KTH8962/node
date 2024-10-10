const http = require("http");

const server = http.createServer((request, response) => {
    const {method, url} = request;
    console.log(method, " ===> ", url);
    response.setHeader("Content-Type", "text/plain");

    if(url == "/main") {
        response.end("main");
    } else if(url =="/board") {
        response.end("board");
    } else {
        response.end("404 Error");
    }
});

server.listen(3000, () => {
    console.log("서버 실행 성공!");
});