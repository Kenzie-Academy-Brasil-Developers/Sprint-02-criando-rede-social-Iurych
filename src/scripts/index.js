// Os dados dinâmicos serão:
function createCard(array, arr) {
    const card = document.querySelector('.container-posts')

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (array[i].user == arr[j].id) {

                let li = document.createElement('li')
                let boxCabecalho = document.createElement('div')
                let picutre = document.createElement('img')
                let description = document.createElement('div')
                let userName = document.createElement('span')
                let job = document.createElement('p')
                let card = document.createElement('div')
                let title = document.createElement('h2')
                let content = document.createElement('p')
                let footer = document.createElement('div')
                let button = document.createElement('button')
                let heart = document.createElement('img')
                let likes = document.createElement('span')


                li.classList.add('container-posts--list')
                boxCabecalho.classList.add('post-list--header')
                picutre.classList.add('post-list--img')
                description.classList.add('post-list--descriptions')
                card.classList.add('post-list--body')
                footer.classList.add('post-list--footer')
                button.classList.add('list-footer--button')
                heart.classList.add('list-footer--img')

                button.addEventListener('click', () => {
                    const modal = document.querySelector('.container__modal')

                    if (array[i].user == arr[j].id) {
                       
                        createModal(array[i], arr[j]) 
                        
                        modal.showModal()
                    }

                })

                userName.innerText = arr[j].user
                job.innerText = arr[j].stack
                title.innerText = array[i].title
                content.innerText = array[i].text
                button.innerText = "Abrir Post"
                picutre.src = arr[j].img
                heart.src = "./src/assets/img/Vector.png"
                likes.innerText = "25"

                description.append(userName, job)
                boxCabecalho.append(picutre, description)

                card.append(title, content)

                footer.append(button, heart, likes)

                li.append(boxCabecalho, card, footer)

                card.append(li)
            }
        }

    }
}

function createModal(post, user){
   
    let closer = document.createElement('span')
    
    let modalHeader = document.createElement('div')
    let img = document.createElement('img')
    let modalBox = document.createElement('div')
    let nameUser = document.createElement('span')
    let job = document.createElement('p')
    let footer = document.createElement('div')
    let title = document.createElement('h2')
    let content = document.createElement('p')
    
    closer.classList.add('closer-modal')
    closer.innerText = 'X'
    closer.addEventListener('click', () => {
        document.querySelector('.container__modal').innerHTML = ''
        document.querySelector('.container__modal').close()
        
    })

    modalHeader.classList.add('modal-header')
        
    img.src = user.img
    img.classList.add('post-list--img')

    modalBox.classList.add('modal-body')    
    
    nameUser.innerText = user.user

    job.innerText = user.stack

    footer.classList.add('modal-footer')    

    title.innerText = post.title

    content.innerText = post.text

    modalHeader.append(img, modalBox)
    modalBox.append(nameUser, job)
    footer.append(title, content)
    
    document.querySelector('.container__modal').append(closer, modalHeader, footer) 

}


createCard(posts, users)
















// const btn = document.querySelectorAll('.btn')

//         btn.forEach(x => {
//             x.addEventListener('click', () => x.innerHTML = "seguindo")
//         }
// )