function addItem(){
    let itemInput = document.getElementById('item')
    let item = itemInput.value.trim()
    
    if(item.length>0){
        let container = document.getElementById('list')
        let itemNode = document.createElement('li')
        itemNode.innerText = item
        let toolbar = document.createElement('div')
        toolbar.style.display = 'inline'
        let delBtn = document.createElement('button')
        delBtn.innerText = '삭제'
        delBtn.style.cssFloat = 'right'

        toolbar.appendChild(delBtn)
        itemNode.appendChild(toolbar)
        container.appendChild(itemNode)
        
        delBtn.addEventListener('click',function(event){
            let removeItem = event.target.parentNode.parentNode
            let parent = removeItem.parentNode
            parent.removeChild(removeItem)
        })

        itemInput.value = ''
        itemInput.focus()
    }
}


window.addEventListener('load',function(event){
    document.getElementById("btn-add").addEventListener('click',addItem)

})