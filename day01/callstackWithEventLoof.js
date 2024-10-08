console.log("1");

setTimeout(()=> console.log("2"), 1000);//1초 후에 "2" 출력, 이벤트루프에서 딜레이 처리함, 다시 콜스택에 호출 됨

//node.js에서 제공해주는 setTimeout api,
// 백그라운드 콜스택에서 setTimeout에서 1초간 대기할 때 task que
//nodeJs의 api setTimeout 메소드는 1초 동안 대기하다가 task que로 보내지고 1초가 기다리면서 다른 메소드들이 순서대로 실행되면, 
//대기 시간이 지나면 task que에서 다시 콜스택으로 console.log("2") 보내서 실행하고 pop
console.log("3");

//원래 순서대로 실행되어야 하지만, "1" 출력 후 2" 기다리지 않고 "3" 먼저 출력 한 다음에 "2" 출력함