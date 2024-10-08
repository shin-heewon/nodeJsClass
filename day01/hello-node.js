const http = require("http"); //http  객체 생성
let count = 0;

//노드 서버 객체 생성
const server = http.createServer((req, res)=>{
    console.log((count+=1));
    res.statusCode = 200; // ok
    res.setHeader("Content-Type", "text/plain");//서버가 프론트에게 전달할 응답 헤더
    res.write("hello\n NodeJS\n");

    setTimeout(()=>{
        res.end("SSG-4th-end");
    }, 2000)//2초마다 콜백

    //process.exit(0);//성공코드로 종료
    //process.exit(1);
    //server.close(()=>console.log("process tervinated"));

});

//hello.js 서버 프로그램을 작성하여 주세요.
// 브라우저에서 https://localhost:8001 접속하면 2초 후에 페이지에 Hello NodeJS 출력되는 서버 프로그램


server.listen(8000, ()=>console.log("Hello Node.js"));

