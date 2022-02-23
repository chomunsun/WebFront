function testAttribute(){
    // id가 main-image인 이미지를 가져와서 속성을 확인해보기
    let obj =document.getElementById("main-image");
    console.log("#main-iamge",obj);

    // 요소가 가진 모든 속성 확인
    console.log(obj.getAttributeNames());

    // title 속성 출력
    console.log(obj.getAttribute("title"));
    // title 속성 변경
    obj.setAttribute("title",
        "사진:" + obj.getAttributeNames("title"));

    // 하단 Products 이미지들도 title 속성 변경
    let subs = document.getElementsByClassName('sub-image')
    console.log(".sub-image:", subs)
    // html 컬렉션
    for(let i = 0; i < subs.length ; i++){
        subs[i].setAttribute('title',
        '사진:' + subs[i].getAttribute('title'));
    }
}
testAttribute();

//이벤트 붙이기
// #main-image를 클릭 -> 이벤트 객체 console 출력  // onclick을 쓸 것
//      title 속성 -> alert로 띄워 보기
// 첫번째 방법은 무시
document.getElementById("main-image").onclick = function(event){
    console.log('event:',event);
    console.log("이벤트 발생 객체:", event.target);
    // event 발생 객체의 title 속성을 alert 창으로 띄워보기
    alert(event.target.title);
}    

// 이벤트 부착 3번째 방법, 가장 추천하는 방법이다!!
window.addEventListener("load", function(event){  
    // load : 브라우저 이벤트 : HTML 다 읽어들이기 모두 메모리에 올린다는것
    // 브라우저의 load 이벤트 -> 초기화 코드 해주면 된다. 안쪽의 메모리가 모두 로드되었다는 것, 절대 실패없다.
    
    document.getElementById("keyword").addEventListener("keyup",function(event){
        console.log("Event:", event);
        console.log("이벤트 발생 객체:", event.target);
    
    // keypress가 발생하면 이 함수 실행
    let keyword = event.target.value;
    console.log(keyword);
    
    let btn=document.getElementById("btn-search").innerText = keyword + ":검색"
    // innerText : 콘텐츠를 텍스트로 입력
    // innerHTML : 콘텐츠를 HTML로 입력한다.

});

// 하단의 prudoucts 이미지 클릭하면 해당 요소들에 클릭 이벤트를 넣어준다.  #main-image
// #product-info h2로 이동

let products = document.getElementsByClassName('sub-image');
console.log('sub-image:', products); //HTML collection : 배열이다. 세부접근 : index
for(let i=0; i<products.length; i++){
    let product = products[i]
    console.log("product:",product)

    product.addEventListener("click", function(event){
        let obj = event.target; // 이벤트 발생 객체
        let mainImage = document.getElementById("main-image");  //data-color를 뽑아야함
        mainImage.src = obj.src;
        mainImage.title = obj.title;
        
        // 클릭한 요소의 data-color 속성
        let color = obj.getAttribute("data-colo");
        //원래 html에서 정해진 값말고 사용자 정의데이터는 접두어를 data- 붙여두게 되어있다.
        let titleTag = document.querySelector('#product-info > h2');
        // 내부 콘텐츠에 접근하는걸 콘텐츠를 변수로 두지 않아도 할 수 있다.
        titleTag.innerText = obj.title;
        // 동적으로 스타일 변경
        // HTML ELEMENT의 style 객체를 이용할 수 있다.
        titleTag.style.color = color;
    })
}

});