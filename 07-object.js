// 방법 1. 객체생성 (object 생성)
let person= new Object(); // 새 객체 생성
// 속성 동적추가 필요할 때 속성을 추가하면 된다.
// 속성은 2가지가 있다. 1. property(데이터) 2. method()(내장함수)
person.name = '홍길동';
person.age = 28;
person.showInfo = function(){
    let message = `Name : ${this.name}, Age : ${this.age}`;
    console.log(message)
}

// 객체 출력
console.log(person);

// 메서드 출력
person.showInfo();




// 객체생성 방법2 : JSON 이용
person = {
    name:'홍길동',
    age: 28,
    showInfo: function(){
        let message = `Name : ${this.name}, Age : ${this.age}`;
        console.log(message)
    }
};


console.log(person)
person.showInfo()

// 자바는 클래스로 생성자를 만들었는데 JS에서는 생성자를 따로 만들지 못한다.
// Javascript는 객체 기반 언어다. 생성자가 없다는것
// prototype 기반 상속을 이용하면 객체지향의 특성을 구현할 수 있다.

// 객체의 생성자를 봤더니 객체이름( 초기화 필드 정보 )
// 함수를 기반으로 객체의 공통 속성을 정의해보자는 생각이 나오게 되었다.

// 함수를 이용해서 생성자 비슷한 것을 만들어내고
// 이 함수를 이용해서 새 객체를 사용할 수 있다.
// Member.prototype.introduce << prototype은 공유영역이다. 이렇게 하면
// 모든 객체가 공유할 수 있는 함수가 생긴다.


// 객체의 constructor로 어떤 객체가 사용되고 있는지 확인해볼 수 있다.
// log(m1.constructor); 어떤 객체로 기반 생성되는가
// Member.prototype : 공유 속성 확인 가능

// 함수 Member()을 먼저 만든다. 그러면 새 객체가 만들어지고 


// 객체 생성 방법3 : 프로토타입 기반 상속
const Member = function(name,position){  // 클래스처럼
    this.name = name;
    this.position = position;  //만약 새 객체를 만든다면?
}

let m1 = new Member("강백호","PF");    //객체 생성
let m2 = new Member("서태웅","SF");

console.log(m1)
console.log(m2)

// JavaScript는 동적으로 속성을 추가할 수 있다.
// 이게 dynamic script의 특징이다. 필요할 때 필요한 속성을 넣을 수 있다

m1.sayHi = function(){    //m1에 메서드 추가
    console.log(`${this.name}님이 당신을 부릅니다.`)
}

console.log(m1);
m1.sayHi();
// m2.sayHi();  m1에만 있는 메서드라서 에러난다.

// 동적으로 추가한 속성들은 해당 객체에서만 사용 가능하다.
// Member 함수를 상속받은(복사) 모든 인스턴스를 속성을 공유하고자 한다면
// Prototype을 활용해야 한다. 매우중요!


Member.prototype.introduce= function(){
    console.log(`${this.name}님이 당신을 부릅니다.`)
}

console.log(m1.constructor); //m1의 기반이 되는 객체 확인
console.log(Member.prototype); // 멤버의 공유영역 << Member에 공통적으로 부여시

// Member.prototype : 멤버클래스에 변화준다는 것
m1.introduce()
m2.introduce()
