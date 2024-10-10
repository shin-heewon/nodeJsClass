const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://ise03054:VCMxhI92AFdQeTlj@cluster0.hlqas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; //mongodb+srv -> 몽고디비만 가지고 있는 프로토콜
//드라이버에서는 호스트명 + 도메인 네임 으로 DNS에 서버 주소를 질의한다.
//데이터베이스 이름 : myFirstDatabase
//retryWrites=true : 네트워크 오류가 발생하거나 정상적인 연결이 어려울 대 쓰기 작업을 자동으로 재시도하는 옵션
//w=majority : 쓰기를 시도할 때 majority(다수)의 인스턴스에 쓰기 요청을 전달하고 성공 확인을 받는다.?


const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const adminDB = client.db('test').admin();
  const listDatabases = await adminDB.listDatabases();
  console.log(listDatabases);
  return "OK";
}

run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());