import http from "k6/http"

export const options = {

    vus:300, // virtual user 100명 생성(트래픽 발생시킴)
    duration: "10s",// 몇 초 동안 테스트를 진행할지 


};


export default function(){
    http.get("http://localhost:8001");//hello.js 실행, 테스트에 사용할 함수 지정
}

//유저 100명이 10초 동안 hello.js에 동시에 계속해서 요청을 보낸다는 의미이다~
//이벤트 아키텍처를 적용하여 이벤트 루프를 통해 비동기 처리가 될 것이다. 즉 hello.js에 지정해놓은 setTimeout 2초 동안 100개의 요청을 다 처리할 수 있다.
//만약 동기 처리였다면, 2초씩 걸리는 요청을 100개 순서대로 처리해서 200초가 걸렸을 것이다.