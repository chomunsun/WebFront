//논리형(boolean) 비교/ 논리 연산의 결과다 true 또는 false 반환

// 논리의 조합은 AND(&&), OR(||), NOT(!)으로 조합 할 수 있다.

let v1; // 선언만 했고 초기화 되지 않았다 --> undefined
let v2 = null; // null로 초기화

console.log(typeof v1, typeof v2)

// undefined 타입 : undefined
// null 타입 : object 객체다
console.log(v2, typeof v2, v2==null)
// undefined: 자바스크립트 인터프리터에게 허용된 타입
// null : 프로그래머가 임의로 설정하는 값

// undefined도 개발자가 설정해 줄 수 있는 값인 것은 맞다
v2 = undefined
console.log(v2, typeof v2, v2==undefined)


// == vs ===
// ==: 타입과 관계 없이 값만 비교
// === : 타입과 함께 값도 비교하는 방법(더 Strict한 방법이다.)

console.log(2022 == "2022");  //true
console.log(2022 == 2022.0);  //true

console.log(2022 === "2022");

//boolean 객체를 이용한 논리값
//number, string이 비어있으면 false, 내용이 있으면 true
console.log(Boolean("Java"), Boolean("")) //내용찬 것 : true, 빈것 falsue
console.log(Boolean(2022), Boolean(0)); // number 숫자 있으면 true


// react, Vue.js 등
console.log(true && "JavaScript");  // javascript 출력
console.log(false && "JavaScript"); // false 출력
console.log(true || "JavaScript")   // true 출력
console.log(false || "JavaScript")  // Javascript 출력



