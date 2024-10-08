const DB=[];

function saveDB(user){

    const oldDBsize = DB.length;
    DB.push(user);
    
    return new Promise(

        (resolve, reject)=>{

            if(DB.length > oldDBsize){
                resolve(user); // 성공시 유저 정보 반환
                console.log(`save ${user.name} to DB SAVE suceess`);
            
            }else{
                reject(new Error("save DB user Fail!!!"));
            }
        }

    );
}

function sendEmail(user, callback){
    
    return new Promise((resolve) => {
        console.log(`send email to ${user.email}`);
        resolve(user);
    });
}


//getResult를 promise 객체 반환 형태로 리팩토링
function getResult(user){
    return new Promise((resolve, reject) => {
        resolve(`sucess register ${user.name}`); // 성공 시, 메시지와 유저명 반환
    });
}

function registerByPromise(user){
    const result = saveDB(user).then(sendEmail(user)).then(getResult).catch(error=> new Error(error));//then을 이용하여 순차 지정해 줌
    console.log(result);
    return result;
}

const myUser = {email:"111@ssg.com", password:"1234", name:"ssg1"};


//const result = registerByPromise(myUser);
//result.then(console.log);

const allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
allResult.then(console.log);





/**
$ node promise-test.js 
save ssg1 to DB SAVE suceess
send email to 111@ssg.com
Promise { <pending> } -> 프로미스 객체가 아직도 백그라운드에서 작업 중임
sucess register ssg1

 */

