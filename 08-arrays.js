const v1 = new Array(10); // 10개짜리 빈 배열
const v2 = new Array(); // 빈 배열
const v3 = new Array(1,'abc',true); // 어떤 객체든 들어갈 수 있다.

console.log(v1, v2, v3);
console.log(v1.length, v2.length, v3.length) // 10,0,3



/*
    length 속성 : 요소의 수
    배열의 선언은 리터럴로 하는게 좋다.
*/

const v4 = [];
const v5 = ['red', 'green', 'blue', 'yellow'];

console.log(v4, v5)

// 객체도 배열처럼 접근이 가능하다.
const person = {
    name : "홍길동",   // 객체 이름. name  << 이것보다 배열처럼 접근 가능
    age : 28
};
console.log(person['name'] + ":" + person['age'])


const arr = [];
console.log(arr.length);
// 인덱스 범위를 벗어난 배열의 접근
arr[10] = 2022;
console.log(arr, arr.length)



// 배열 합치기 : concat
const veges = ['배추', '무', '쪽파'];
const sources = ['소금', '고춧가루', '새우젓'];

console.log(veges, sources)
const ingr = veges.concat(sources);
console.log(ingr)

// join : 특정 문자열을 기준으로 합친다 -> string
console.log("김장 재료:", ingr.join(","));  // 컴마 구분자로 합치기

// push, pop : 뒤쪽에서 요소 삽입, 추출
let fruits = ["banana", 'orange', 'apple', 'mango'];
console.log(fruits);
fruits.push('kiwi');  // 배열 뒤에 요소 추가
console.log(fruits);
console.log(fruits.pop());       // 배열 뒤에서 요소 추출, str으로 추출
console.log(fruits.pop());

console.log(fruits);

//shift, push : 서로 방향이 반대.  shift는 앞쪽에서 요소 추출 push는 추가
fruits.push("Pear");
console.log(fruits);
console.log(fruits.shift());  // 맨 앞으로부터 요소 추출
console.log(fruits.shift());
console.log(fruits.shift());

console.log(fruits);


// splice 메서드  : delete와 insert를 동시에 할 수 있는 메서드
fruits = ["banana", 'orange', 'apple', 'mango'];
// 인자의 개수가 1개 : 해당 인덱스 ~ 끝까지 추출한 후 제거
console.log(fruits);
console.log(fruits.splice(2));  // 2번 인덱스~ 끝까지 추출 후 제거
console.log(fruits);

fruits = ["banana", 'orange', 'apple', 'mango'];
// 인자의 개수가 2개 : splice(1,2) 시작 인덱스, 갯수 추출 후 제거
console.log(fruits);
console.log(fruits.splice(2,1)); //번 인덱스부터 1개 추출 후 제거
console.log(fruits);

fruits = ["banana", 'orange', 'apple', 'mango'];
// 인자의 개수가 3개 이상 : 시작 , 갯수, 추가할 아이템들
console.log(fruits);
console.log(fruits.splice(2,1,'kiwi','pineapple')); // 추출
console.log(fruits);

// reverse, slice : reverse : 순서 뒤집기, slice : 일부 추출
console.log(fruits.reverse())
console.log(fruits.slice(1,3))  // 일부 추출, 삭제 안함
let slices = fruits.slice(1,2); // start와 end

console.log(slices);

// sort : 정렬 - 기본 오름차순 정렬
console.log(fruits);
fruits.sort(); // 오름차순 정렬
console.log("sort asc:", fruits);
fruits.sort(function(v1,v2){
    if (v1<v2) return 1; // 양수면 v1이 순서가 뒤다.
    if (v1>v2) return -1; // 음수면 v1이 순서가 앞이다.
    if (v1==v2) return 0; // 0-> 순서가 같다.
})
console.log("sort desc:", fruits);


