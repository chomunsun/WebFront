// 한줄 주석 
/* 여러줄 주석 */

// 터미널, 콘솔에 메시지 출력을 위해서 콘솔 객체를 이용한다.

console.log("일반 메시지")
console.error("에러메시지")
console.warn("경고메시지")
console.debug("디버그 메시지")
console.info("정보메시지")


// 변수 var, let, const
var testVar = "var"; // ES6이전 할당 방법, 문제가 많다.
let testLet = "let"; // let은 재할당 가능 변수
const testConst = "const"; //const는 재할당 불가능 상수

console.log(testVar,testLet,testConst)
// 변수의 변경
testVar = "var changed";
testLet = "let changed";
//testConst = "const changed";

console.log(testVar,testLet,testConst)
let v = "String";
console.log(v,typeof v)  // 변수의 현재 타입 확인
// 동적 타이핑 언어 -> 언제든지 타입이 변경될 수 있다.

v = 2002;
console.log(v,typeof v)

// 기본 데이터형 : number, string, boolean ,  string :




