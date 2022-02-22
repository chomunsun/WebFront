// for문과 while문을 이용해서 1. 구구단, 2. *그리기
/* 2번문제
*****
****
***
**
*
*/

for(let i=2 ; i<=9 ; i++){
    for(let j=1; j <=9 ; j++){
        console.log(i +'*'+j+'='+i*j)
    }
}

for(let i =0; i<5 ; i++){
    for(let j =5; i<j; j--){
        process.stdout.write('*')
    }
    console.log()
}


// 조건문 타 언어와 마찬가지로 if ~ else if ~ else 블록을 사용할 수 있다
let num =3;
if(num>0){
    console.log("양수입니다.")
}else if (num<0){
    console.log("음수입니다.")
}

// switch : 타 언어와 마찬가지로 swich 문 쓸 수 있다.

// 반복문 : for, while, do~while문도 C 계열 언어와 거의 유사

/* 함수 : 특정 실행코드의 묶음을 프로그램 상의 다른 영역에서도 
재호출 할 수 있도록 그룹화한 기능 객체

함수의 선언 : 함수 선언식
function sum(a,b){  // 선언한 인자값
    return a+b;     // 반환값을 명시
}

console.log(sum(3, 7)) << 사용
함수 표현식 : 익명함수, 함수도 객체로 간주한다.
const sum = function(a,b){
    return a+b;
}
이 함수 자체를 sum이라는 변수에 할당하고 사용
console.log(typeof sum, sum(3,7)); // function(타입) 10

익명함수는 1회성 함수다.

함수로 전달된 모든 매개변수는 함수 내부에서 arguments 객체로 참조할 수 있다.
console.log(getNumberTotal(1,2,3,4)) 갯수 상관없이 인자가 배열화 돼서
파라미터로 들어갈 수 있다.  

*/