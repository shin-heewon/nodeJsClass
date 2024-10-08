
/*간단한 라우터 실습*/

const http = require("http");
const url = require("url"); // url 모듈 로딩, 모듈을 node 에서 제공하는 api
const server = http.createServer((req,res)=> {
    const path = url.parse(req.url, true).pathname;// path명 할당, true 지정하면 쿼리스트링까지 path에 저장하겠다~

/*
url.parse(): url 모듈의 parse() 함수는 URL을 다양한 구성 요소로 나누는 역할을 합니다. pathname, query, host 등을 분리할 수 있습니다.
true: 두 번째 매개변수로 true를 전달하면 쿼리 스트링(예: ?name=Lin)이 객체 형태로 파싱됩니다. 만약 true를 전달하지 않으면 쿼리 스트링이 문자열로 남습니다.
*/




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