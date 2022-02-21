// 함수식, 함수 선언식 Declaration)
function sum(a,b){ // function과 함수명(매개변수 목록) < 선언부
    return a+b; // 함수가 어떤 값을 반환할 때는 return 키워드
}
// 함수 사용 필요
console.log(sum(10,20));


// 함수 표현식(Expression) : 이름이 없는 함수 -> 익명 함수
const asum = function(){  // << 함수 이름이 없는 경우 : 할당하기
    return arguments[0]+arguments[1];
}
console.log(asum(10,20)); // 인자를 변수가 대신 받는다.


// 매개 변수의 이해
// 모든 자바스크립트는 매개변수는 모든 인자값이 arguments라는 이름의 배열

function getNumberTotal(){
    //    console.log("arguments", arguments);
    // 전달받은 모든 매개변수를 합산
    let result =0;

    for(let i=0; i<arguments.length;i++){
        if (typeof arguments[i] =="number"){
           result += arguments[i];
        }
    }
    return result;
}
console.log(getNumberTotal(1,2,3,4,5,6,7)) // 이 값들이 배열화된다
console.log(getNumberTotal(1,2,"3",4,5,6,7))
//합을 하면 string 만나기 전까지는 합한 값이 return되고 그 이후부터는 
// 문자열화 된 것이다. 문자열 + 다른객체 : 문자열화 되는 것




// 자바 스크립트의 함수는 1급 시민이다.
// 함수가 1급 시민이라는 것은 function 함수도 number, string같은
// 객체와 동등한 권리, 다른 함수의 인수로 전달될 수 있다.

// 다른 함수의 인수로 전달되어서 함수의 내부에서 거꾸로 호출되는 함수
// --> callback이라고 함

function calcUsingCallback(val1, val2, func){
    // 전달된 func = 함수인가를 판단해야한다.
    if(typeof func == "function"){ // 실행 가능한 함수이다.
        func(val1, val2); // -> callback
    }
}

calcUsingCallback(3,4,function(v1,v2){
    console.log(v1 + v2);    
})


calcUsingCallback(3,4,function(v1,v2){
    console.log(v1*v2);
})

// ES6의 화살표 표기법
// 인수가 없는 함수
const f1 = function(){ return "Hello"};
const f1Arrow = () => "Hello";  //() : 인수목록  "Hellow" 수행코드
                                //() 생략불가

console.log(f1(), f1Arrow());
//인수가 1개 이상
const f2 = function(name){ return "Hello," + name};
const f2Arrow = name => "Hello," + name;  // 인수가 1개 이상이면 ()생략가능

console.log(f2("Bit"), f2Arrow("Bit"));

// 주의 : 함수의 범위(스코프)가 다르다. 내부적 작동 방식이 다르므로 유의

// 인수가 2개 이상 
const f3 = function(a,b){return a+b};
const f3Arrow = (a,b) => a+b;

console.log(f3(3,7), f3Arrow(3,7))





