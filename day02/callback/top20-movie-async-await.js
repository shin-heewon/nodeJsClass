//axios 사용하면 외부 데이터를 편리하게 가져올 수 있다.

const axios = require("axios");// axios import




// const handleSave = async (record) => {
  //   try {
  //     const params = {
  //       productId: record.productId,
  //       storageId: record.storageId,
  //       quantity: editedQuantity,
  //     };

  //     const response = await post(`/stock/modify`, params);

  //     if (response.status === 200) {
  //       message.success('재고가 성공적으로 수정되었습니다.');
  //       fetchData(); 
  //       setEditingKey(''); 
  //     } else {
  //       message.error('재고 수정 중 오류가 발생했습니다.');
  //     }
  //   } catch (error) {
  //     message.error('재고 수정 중 오류가 발생했습니다.');
  //     console.error(error);
  //   }
  // };


  async function getTop20Movies() {

    const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";
    
    try {
        //1. 네트워크에서 데이터를 받아오니까 데이터를 다 전송받을 때까지  await
        const result = await axios.get(url);

        //2. 데이터 잘 받아왔다면 result에 data 프로퍼티를 추출해 냄
        const {data} = result;

/**result에서 data를 다시 추출하는 이유는 axios.get() 요청의 반환값이 전체 응답 객체이기 때문입니다. 이 응답 객체에는 여러 가지 정보가 포함되어 있으며, 우리가 필요한 영화 정보는 그 중 data라는 프로퍼티에 저장됩니다.

axios.get(url)은 전체 HTTP 응답 객체를 반환하는데, 이 객체는 다음과 같은 구조를 가집니다:

javascript
코드 복사
{
  data: {...},          // 서버에서 보내준 실제 데이터
  status: 200,          // HTTP 상태 코드
  statusText: "OK",     // 상태 메시지
  headers: {...},       // 응답 헤더
  config: {...},        // 요청 설정 정보
  request: {...}        // 요청 정보
}
위에서 보듯이 axios.get()이 반환하는 객체는 단순히 데이터만이 아니라, 상태 코드, 헤더 등 여러 가지 정보를 포함합니다. 하지만 우리가 필요한 정보는 서버가 응답한 실제 데이터이므로, result.data를 사용하여 해당 데이터를 추출하는 것입니다. */


        if(!data.articleList || data.articleList.size == 0){
            throw new Error("no data");
        }

        const movieinfos = data?.articleList?.map((article, idx)=>{
            return({title:article.title, rank:idx +1})
        });

        for(let movieInfo of movieinfos){
            console.log(`[${movieInfo.rank}위~~~] ${movieInfo.title}`);
        }



    } catch (error) {
        throw new Error(error);
    }

  }


  getTop20Movies();

