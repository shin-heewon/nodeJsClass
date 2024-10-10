async function myName(){return "ssg"};

console.log(myName());// 프로미스 객체 반환됨!

function myName2(){return "ssg"};
console.log(myName2());// 그냥 문자열 출력됨


async function showName(){
    const name = await myName(); //await는 async 함수 내부에서만 쓸 수 있음
    //pending : promise객체의 성공 결과가 나오기까지 기다리고!! myName의 return 값이 name 변수에 저장되는 것을 기다린다.

    console.log(name);

}

console.log(showName());//Promise { <pending> }


/**
 * Promise { <pending> }
 * ssg
 * 
 * 
 * 
 * console.log(showName());에서 showName()은 프로미스를 반환하므로, Promise { <pending> }이 출력됩니다. 이는 showName() 함수 내에서 await myName()이 완료되기 전 상태입니다.

await myName();이 완료되고 나면, "ssg"가 출력됩니다.
 */