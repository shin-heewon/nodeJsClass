const http = require("http");//  http라는 모듈을 불러올 때 사용하는 require 함수
const server = http.createServer((req,res)=> {//http.request, http.response
    res.setHeader("Content-Type", "text/html");
    res.end("Ok");// 응답 종료시 ok 출력 
});

server.listen("3000", ()=>console.log("OK 서버 시작") );//0~1024는 보통 이미 포트 번호가 할당되어 있다, 프론트 서버는 보통 3000 지정 많이 해 줌