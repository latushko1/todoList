const createBtn = document.querySelector('.btn');
const list = document.querySelector('.list');
const listImg = document.querySelector('.list-img');
const emtylist = document.querySelector('.emty-list');

if (localStorage.getItem('tasksList')){
    list.innerHTML = localStorage.getItem('tasksList');
}


window.addEventListener('click', function(e){
        const listItem = {
            title: document.querySelector('.title-input').value,
            content: document.querySelector('.content-input').value,
        };

        const cardItemHTML = `<div class="list-item">
    <div class="left-list">
        <h4 class="list-item__title">${listItem.title}</h4>
        <p class="list-item__content">${listItem.content}</p>
    </div>
    <div class="right-list">
        <div class="check-btn"  data-action="done">
            <img class="list-img" src="img/checkmark.svg" alt="">
        </div>
        <div class="cross-btn" data-action="delete">
        <img class="list-img cross-btn" src="img/cross.svg" alt="">
    </div>
    </div>
    </div>`

        if (e.target === createBtn){
            list.insertAdjacentHTML("beforeend", cardItemHTML);
            emtyList()

            document.querySelector('.title-input').value = ''
            document.querySelector('.content-input').value = ''
            saveHTMLTool()
            
        } 
            
        
})

function emtyList () {
    if(list.children.length >= 1){
        emtylist.classList.add('hidden')
    } else{
        emtylist.classList.remove('hidden')
    }
}

list.addEventListener('click', function (e){
    if (e.target.dataset.action === 'done' ) {
        e.target.closest('.list-item').remove()
        emtyList()
        saveHTMLTool()
    }

    if (e.target.dataset.action === 'delete' ) {
        e.target.closest('.list-item').classList.add('list-item-done')
        emtyList()
        saveHTMLTool()
    }
})

function saveHTMLTool() {
    localStorage.setItem('tasksList', list.innerHTML)
}
