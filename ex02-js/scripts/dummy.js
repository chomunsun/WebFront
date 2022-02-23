function addItem(){
    let itemInput = document.getElementById('item');
    let item = itemInput.value.trim(); //빈칸 제거

    if(item.length>0){
        console.log("추가할 아이템:", item)
        let container = document.getElementById('list');//추가할 부모 id = list
        let itemNode = document.createElement("li") //추가할 위치를 선택해야한다.
        itemNode.innerText = item;
        // 안쪽에 도구 상자를 추가
        let toolbar = document.createElement('div')
        toolbar.style.display = 'inline';
        let delBtn = document.createElement("button")
        delBtn.innerText = "삭제";
        delBtn.style.cssFloat = "right";

        // toolbar.appendschild를 넣어서 추가하면 된다.
        toolbar.appendChild(delBtn);
        itemNode.appendChild(toolbar);
        container.appendChild(itemNode);
        

        delBtn.addEventListener('click',function(event){
            console.log('이벤트 발생 객체:', event.target)
            // 삭제할 노드
            let removeItem = event.target.parentNode.parentNode; 
            // 버튼 누르면 li가 삭제되어야 하니까 parentNode를 쓴 것
            console.log('삭제할 노드:', removeItem)
            let parent = removeItem.parentNode; //부모
            parent.removeChild(removeItem); // 명령어. li가 removeItem, 그의 parent ul로부터 remove item li 삭제
        })

        // 입력상자 초기화, 포커스
        itemInput.value = "";
        itemInput.focus();
    }
}
// 리스트 id cart-list - list - li들
// 버튼 id item - btn-add 추가
window.addEventListener('load',function(event){  //onload -> 초기화 
    // 쇼핑 목록 초기화
    let cartItems = document.querySelectorAll('#list > li')
    console.log('items:',cartItems)
    for (let i=0 ; i<cartItems.length ; i++){
        cartItems[i].parentNode.removeChild(cartItems[i])
    }
    
    // 버튼 클릭 이벤트 만들기
    document.getElementById('btn-add').addEventListener('click', addItem);  //funtion을 additem
})