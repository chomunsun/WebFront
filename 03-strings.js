// String에 대한 이해
const s1 = "Modern JavaScript and Java"
const s2 = String("Modern JavaScript and Java")
// literal과 객체로 만들 수 있다.

console.log(typeof s1, typeof s2)
// 길이 확인 가능
console.log(s1, "/ Length:", s1.length)

// 문자열 추출
console.log(s1.charAt(7));
console.log(s1[7]);        // 배열처럼 사용 가능, 변경은 불가능하다
console.log(s1.substring(7, 17)); // 문자열을 7번 인덱스부터 17번 인덱스 이전까지 10개라면 +10
console.log(s1.substring(7)); // 7번 인덱스부터 끝까지

//검색 메서드(중요)
// s1에서 문자열 Java 검색
let position = s1.indexOf("Java"); // s1에서 Java의 위치검색
console.log(s1); 
console.log("1번째 Java:", position) //position은 인덱스 위치다.
position = s1.indexOf("Java", position+4)//position + 4 추가하면 시작점
console.log("2번째 Java:", position) // s1의 특정 위치부터 검색
position = s1.lastIndexOf("Java")
console.log("2번째 Java:", position)

position = s1.indexOf("Nothing"); // 없는 검색어의 검색
console.log("없는 검색어 : ", position); // 결과는 -1

position = s1.lastIndexOf("Script"); // 뒤로부터 검색
console.log("뒤로부터 검색:", position); // 인덱스 값은 앞에서부터다.


// 문자열 치환
console.log(s1);
console.log(s1.replace("JavaScript","JS")) // replace 1인자 : 변한할 것, 2인자 : 변환 하려고 한것
let s3 = s1.replace("JavaScript", "JS")
console.log(s1) // 문자열 자체 원본 데이터는 변경이 안된다.
                // 변경된 값은 다시 할당 받아야 한다.

// 좌우 화이트 스페이스 제거
console.log("          Hello            ".trim()) // 좌우 공백 제거


// ES6의 Template String (중요) 
// 이스케이프 -> 주의하기  \n : 줄바꿈  \t : tab   
// \' : 작은 따옴표 \" 큰 따옴표   \` 백틱 : 여러줄 문자열, 탬플릿 스트링 기호다
// \$ : 달러 기호

// 현재 기온은 00도 입니다. --> 문자열로 만들어야 한다면
// 기존 방법
let temp = 12;
let message = "현재 기온은 " + temp+"도 입니다."
console.log(message) // 이게 되네
// 문자열이 복잡하거나 여러 줄일 때는 최종본을 만들기 어려울 수 있다.


// 템플릿 문자열 활용  $기호를 파이썬처럼 삽입
message = `현재 기온은 ${temp}도 입니다.`  //파이썬처럼 사용
console.log(message)


// 여러줄 문자열도 템플릿 문자열로 쉽게 만들 수 있다.
message = "예전에는 여러 줄 문자열을 만드는 것이 \n쉽지 않았습니다."
console.log(message)
message = `하지만 ES6에서는 
아주 손쉽게 여러 줄 문자열을 
만들 수 있습니다.`
console.log(message)

