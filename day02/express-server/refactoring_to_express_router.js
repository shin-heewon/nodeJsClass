
const url = require("url");//어떤 url 요청할지를 받아야 하므로 

const express = require("express");//express 서버 객체 만듬, 즉 express 의 모든 기능 사용 가능?

const app = express();
const port = 3000;

//1. GET 메서드 라우팅 설정 => 리팩토링 전의 urlMap 이용하는 방법과 비교했을 때 get 함수를 이용해서 굉장히 단순해짐. 서버마다 라우팅 방법을 적절하게 적용해서 사용하는 것이 좋다.
app.get("/", (_, resp)=>resp.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);


//2. 
function user(req, resp){//function으로 지정해놓으면 호이스팅이 일어나서 어디에 선언해놓든지 상관 없이 호출하여 사용 가능하다
    const user = url.parse(req.url, true).query;
    resp.json(`[user] name : ${user.name}, company : ${user.company}`);//json 함수를 이용해서 바로 처리 가능함
}

function feed(_, resp){//함수 인터페이스 내에 requerst를 파라미터로 받아야 하지만 사용하지 않으므로 형식 대체를 위해 _ 문자로 표시 해 ㄴ줌!
    resp.json(
        `
            <ul>
                <li>p1</li>
                <li>p2</li>
                <li>p3</li>
            </ul>
        `
    ); // /feed에 대한 결과값 설정
}



app.listen(port, ()=>{

    console.log(`START SERVER : 익스프레스 라우터 리팩토링`);
});


