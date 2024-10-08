const DB = [];

//회원가입 API 함수 : 3중 콜백 함수 
//1. 회원 가입 api 호출
function register(user){
    return saveDB(user, function(user){
        return sendEmail(user, function(user){//2. DB 에 저장 후 콜백 실행
            return getResult(user);//3. 이메일 발송 로그만 남기고 코드 실행 후 콜백 실행
        });
    });
}


//DB 저장
function saveDB(user, callback){
    DB.push(user);
    console.log(`saved ${user.name} to DB`);
    return callback(user);
}

//이메일 발송 로그만 남긴고 코드 실행
function sendEmail(user, callback){
    console.log(`send email to ${user.email}`);
    return callback;
}

function getResult(user){
    return console.log(`sucess register ${user.name}`);
}


const result = {email:"111@ssg.com", password:"1234", name:"ssg1"};

console.log(register(result));



