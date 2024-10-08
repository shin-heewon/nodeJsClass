//1. http 모듈을 불러와서 http 변수에 할당
//2. 노드 서버 객체 생성
//3. 카운트 1 증가
//4. 결과값 200 셋팅
//5. 헤더 설정
//6. 응답값 설정 (Hello!)
//7. 2초 후에 (nodeJS!) 출력
//8. 서버프로그램 실행



const http = require("http"); //http  객체 생성
let count = 0;


//노드 서버 객체 생성
const server = http.createServer((req, res)=>{
    
    log(count);
    res.statusCode = 200; // ok
    res.setHeader("Content-Type", "text/plain");//Content-Type이라는 해당 텍스트를 text를 평문으로 해석해서 나타내겠다. text/html -> 해당 텍스트를 html로 나타냄 
    res.write("Hello!"); // 화면 출력

    setTimeout(()=>{
        res.end("nodeJS!");//2초 후에 출력 후 끝냄
    }, 2000);}//2초마다 콜백


    

);

//hello.js 서버 프로그램을 작성하여 주세요.
// 브라우저에서 https://localhost:8001 접속하면 2초 후에 페이지에 Hello NodeJS 출력되는 서버 프로그램



function log(count){
    console.log((count+1));
}


server.listen(8001, ()=>console.log("Hello Node.js ex"));

