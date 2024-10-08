const express = require("express");
const app = express();//초기화

let posts = []; // 게시글 리스트로 사용할  posts에 빈 리스트 할당

//req.body를 사용하려면 JSON  미들웨어를 사용해야 한다.
app.use(express.json()); // JSON 미들웨어 활성화


/**Express에서 POST 요청으로 보내진 JSON 형식의 데이터를 파싱하여 req.body로 접근할 수 있도록 돕는 미들웨어입니다. 이를 통해 클라이언트가 서버로 전송한 JSON 데이터를 처리할 수 있습니다.
express.json()에 대한 설명
클라이언트가 POST 요청을 보낼 때, 그 요청 본문에 JSON 형식의 데이터를 담을 수 있습니다.
이 데이터를 서버가 처리하려면, JSON을 객체로 변환해야 합니다. express.json() 미들웨어가 이를 자동으로 처리해 주어, req.body로 데이터에 접근할 수 있게 해줍니다. */





//POST 요청할 때 컨텐트 타입이 application/x-www.form-urlencode 인 경우 파싱
app.use(express.urlencoded({extended : true}));//확장하여 미들웨어와 함께 쓰겠다~

app.get("/", (req, resp)=>{ // root 요청시 실행
    resp.json(posts);//게시글 리스트를 json 형식으로 보여주겠다~
});

app.post("/posts", (req, resp)=>{
    const {title, name, text} = req.body;//http 요청의 body 데이터를 각각의 변수에 할당

    posts.push({id:posts.length +1, title, name, text, createDt: Date()});//map처럼 push를 통해 값 넣어줌. 메모리에 저장?

    resp.json({title, name,text});

});

app.delete("/posts/:id", (req, resp)=>{

    const id = req.params.id;
    const filterPosts = posts.filter((post) => post.id !== +id);//요청방식은 post, 글 삭제 로직

    /*
        posts는 현재 저장된 게시글 리스트를 담고 있고, filter() 메서드는 배열을 순회하면서 조건에 맞는 요소만 새로운 배열로 반환합니다.
여기서 +id는 req.params.id 값이 문자열로 전달되므로 숫자로 변환하기 위해 앞에 +를 붙입니다. (예: "3"을 숫자 3으로 변환)
조건은 post.id !== +id이므로, post.id가 삭제하려는 id와 일치하지 않는 게시글들만 남겨 새로운 배열을 만듭니다.
즉, 해당 id를 가진 게시글은 이 필터링에서 제외되어 삭제된 것처럼 보이는 것이죠.
    
    
    */


    const isLengthChanged = posts.length !== filterPosts.length; // 삭제 확인

    posts = filterPosts;//다시 옮겨 넣음?

    if(isLengthChanged){//삭제가 성공하면 글 개수가 변경되므로 ok 출력
        resp.json("OK");
        return;
    }
    resp.json("Not Changed!");
}
);

app.listen(3000, ()=>console.log("Welcome posts board Service START!!"));
