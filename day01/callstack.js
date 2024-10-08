//자바스크립트 엔진은 자바스크립트를 실행하는 힙과 콜스택을 갖고 싱글 스레드로 실행
    // 싱글스레드 => 콜스택이 하나이다., 따라서 한 번에 하나의 작업만 가능하다.

    function func1(){
        console.log("func1");
        func2();
        return;
    }

    function func2(){
        console.log("func2");
        return;
    }

    func1();

