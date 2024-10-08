
/*간단한 라우터 실습*/

const http = require("http");
const url = require("url"); // url 모듈 로딩, 모듈을 node 에서 제공하는 api
const server = http.createServer((req,res)=> {
    const path = url.parse(req.url, true).pathname;// path명 할당, true 지정하면 쿼리스트링까지 path에 저장하겠다~
    res.setHeader("Content-Type", "text/html; charset=urf-8");//한글 깨짐 방지

    if(path === "/user"){

        user(req, res);//user 에 대한 함수 실행 (콜)

    }else if(path === "/feed"){
        feed(req, res);// 함수 콜
    }else{
        notFound(req, res);
    }

}).listen("3000", ()=>console.log("OK 라우터 서버!") );




/**콜백 함수 선언 */

const user = (req, res)=>{
    
    const userInfo = url.parse(req.url, true).query;//req로부터 쿼리스트링 데이터를 userInfo에 할당함

    res.end(`[user] name : ${userInfo.name}, company : ${userInfo.company}`); // userInfo에 저장되어있는 name과 company 값 출력하고 종료, el표기법으로 값 할당할 때에는 "" 아니고 `` 사용할 것!

};

const feed = (req, res)=>{
    res.end(
        `
            <ul>
                <li>p1</li>
                <li>p2</li>
                <li>p3</li>
            </ul>
        `
    ); // /feed에 대한 결과값 설정
};

const notFound = (req, res)=>{
    res.statusCode = 404;
        res.end("404 page not found");
};