// 정수, 실수에 관계없이 수치형이다. number.
let n1 = 5; //literal
let n2 = Number(5);  // 객체 이용 생성

console.log(n1, "==", n2,"?", n1==n2);

const hex = 0xff0000;
const oct = 0o10;
console.log(hex,oct)

console.log(Math.round(Math.PI));  // round() 반올림, PI파이
console.log(Math.min(1,5,2,3,6,7),
            Math.max(9,2,6,2,4))
console.log(Math.round(3.567), Math.trunc(3.567), Math.floor(3.567))
            // round : 반올림, trunc, floor : 소수점 버리기


console.log("-------------Casting");
// parseInt, parseFloat: 문자열 -> Number형으로 변환
console.log(parseInt("011"));   //11
console.log(parseInt("011",2)); //3  2진수
console.log(parseInt("123.456"));//123
console.log(parseFloat("123.456"));//123.456


// 숫자로 변환할 수 없는 형태의 변한 -> NaN
let v = parseInt("a123.456"); // 숫자로 변환할 수 없는 형태
console.log(v, typeof(v))   //숫자로 변환하면 NaN 출력, type은 Number다.

// NaN을 산술연산에 포함시키면 -> NaN가 나온다.
console.log(v+10);  // NaN + 10  --> NaN다.

// 수치형 변수가 NaN인지 확인방법
console.log(isNaN(v))   // true

// Infinity : 무한대
v = 1/0;
console.log(v, typeof(v))

// Infinity가 포함된 산술 연산식 -> Infinity 
console.log(v+10);

// 유한수인지 확인방법 isFinite 함수  유한수인가?
console.log(isFinite(v))  // false : 무한이다.


//




