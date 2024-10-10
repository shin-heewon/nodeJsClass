function waitoneSecond(msg){//1초 대기하고 전달받은 메시지를 출력

    return new Promise(
        (resolve, _)=>{
            setTimeout(()=> resolve(`${msg}`),1000);//setTimeout은 promise 객체를 반환하지 않음. 그래서 new Promise 해서 객체를 생성. promise 객체를 직접 반환하기 때문에 async 안 붙여도 됨
        }
    );

}

async function countOneToTen(){//10초 동안 1초마다 메시지를 출력

    for(let x of [...Array(10).keys()]){//파라미터가 몇 개 들어올지 모르니까 ...으로 arguments 받을 수 있음
        let result = await waitoneSecond(`${x+1}초 대기 중`);
        console.log(result);
    }
    console.log("process end!!");
}

countOneToTen();//호출

/**
 * 여기서 await myName();은 myName()이 반환하는 프로미스가 완료될 때까지 기다리고, 프로미스가 해결되면 그 결과 ("ssg")를 name에 할당합니다. 그러고 나서 console.log(name);이 실행됩니다.

console.log(showName());:

showName()은 async 함수이므로, 이 함수도 Promise 객체를 반환합니다.
즉, console.log(showName());는 Promise { <pending> }을 출력합니다.
Promise { <pending> }은 프로미스가 아직 완료되지 않았음을 의미합니다. await가 실행되고 프로미스가 완료되기 전까지는 이 상태입니다.

실행 흐름
첫 번째 console.log(myName());은 즉시 실행되며, Promise { 'ssg' }를 반환합니다. 이는 myName()이 반환하는 프로미스 객체입니다.

console.log(showName());에서 showName()은 프로미스를 반환하므로, Promise { <pending> }이 출력됩니다. 이는 showName() 함수 내에서 await myName()이 완료되기 전 상태입니다.

await myName();이 완료되고 나면, "ssg"가 출력됩니다.
 * 
 */