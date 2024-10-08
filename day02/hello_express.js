const express = require("express");//express 서버 객체 만듬, 즉 express 의 모든 기능 사용 가능?

const app = express();//express인스터스 후 app 할당하여 express 서버 초기화
const port = 3000;

app.get("/", (req, resp)=>{//요청 path가 root이고, get 요청이면 응답값 설정하기

        resp.set({"Content-Type" : "text/html; charset=utf-8"});
        resp.end("Hello Express 반가워요~~");

    }

);


app.listen(port, ()=>{//클라이언트 요청 listening

    console.log(`START SERVER : use ${port}`);
});


