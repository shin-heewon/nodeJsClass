
/*간단한 라우터 실습*/

const http = require("http");
const url = require("url"); // url 모듈 로딩, 모듈을 node 에서 제공하는 api
const server = http.createServer((req,res)=> {
    const path = url.parse(req.url, true).pathname;// path명 할당, true 지정하면 쿼리스트링까지 path에 저장하겠다~
    res.setHeader("Content-Type", "text/html; charset=urf-8");//한글 깨짐 방지

    if(path === "/user"){

        res.end("[user] name : jane, company : ssg"); // user에 대한 결과값 설정, 값을 response 하고 종료

    }else if(path === "/feed"){
        res.end(
            `
                <ul>
                    <li>p1</li>
                    <li>p2</li>
                    <li>p3</li>
                </ul>
            `
        ); // /feed에 대한 결과값 설정
    }else{
        res.statusCode = 404;
        res.end("404 page not found");
    }

}).listen("3000", ()=>console.log("OK 라우터 서버!") );