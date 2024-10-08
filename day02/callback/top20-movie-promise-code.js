//axios 사용하면 외부 데이터를 편리하게 가져올 수 있다.

const axios = require("axios");// axios import

const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";

axios.get(url)
    .then((result) => {

        if(result.status !== 200){
            throw new Error("요청이 실패하였습니다.");
        }

        if(result.data){//데이터가 들어왔다면?
            return result.data;
        }

        throw new Error("데이터가 없습니다.");//데이터가 없는 경우

    })
    .then(
        (data) => {//result에서 반환한 데이터를 받아서~
            if( !data.articleList || data.articleList.size == 0){
                throw new Error("데이터가 없습니다.");
            }
            return data.articleList;//데이터 있으면 전체 리스트 반환
        }
    )
    .then(
        (articles) =>{
            return articles.map((article, idx)=>{//map을 이용해서 랭킹을 매겨서 출력

                return {title : article.title, rank : idx+1};

            });
        }
    )
    .then(
(results) => {

    for(let movieinfo of results){//향상된 for문과 비슷함
        console.log(`[${movieinfo.rank}위] ${movieinfo.title}`);
    }
}


)
.catch(
    (err)=> {
        console.log("<<error>>");
        console.log(err);
    }
);