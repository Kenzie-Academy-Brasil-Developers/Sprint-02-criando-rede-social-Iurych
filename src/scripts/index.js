// Os dados dinâmicos serão:
function createCard(array, arr) {
    const card = document.querySelector('.container-posts')

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (array[i].user == arr[j].id) {

                let li = document.createElement('li')
                let divA = document.createElement('div')
                let imgA = document.createElement('img')
                let divB = document.createElement('div')
                let spanA = document.createElement('span')
                let pA = document.createElement('p')
                let divC = document.createElement('div')
                let h2 = document.createElement('h2')
                let pB = document.createElement('p')
                let divD = document.createElement('div')
                let button = document.createElement('button')
                let imgB = document.createElement('img')
                let spanB = document.createElement('span')


                li.classList.add('container-posts--list')
                divA.classList.add('post-list--header')
                imgA.classList.add('post-list--img')
                divB.classList.add('post-list--descriptions')
                divC.classList.add('post-list--body')
                divD.classList.add('post-list--footer')
                button.classList.add('list-footer--button')
                imgB.classList.add('list-footer--img')

                button.addEventListener('click', () => {
                    const modal = document.querySelector('.container__modal')

                    if (array[i].user == arr[j].id) {
                       
                        createModal(array[i], arr[j]) 
                        
                        modal.showModal()
                    }

                })

                spanA.innerText = arr[j].user
                pA.innerText = arr[j].stack
                h2.innerText = array[i].title
                pB.innerText = array[i].text
                button.innerText = "Abrir Post"
                imgA.src = arr[j].img
                imgB.src = "./src/assets/img/Vector.png"
                spanB.innerText = "25"

                divB.append(spanA, pA)
                divA.append(imgA, divB)

                divC.append(h2, pB)

                divD.append(button, imgB, spanB)

                li.append(divA, divC, divD)

                card.append(li)
            }
        }

    }
}

function createModal(post, user){
   
    let span_a = document.createElement('span')
    
    let div_a = document.createElement('div')
    let img = document.createElement('img')
    let div_b = document.createElement('div')
    let span_b = document.createElement('span')
    let p_a = document.createElement('p')
    let div_c = document.createElement('div')
    let h2 = document.createElement('h2')
    let p_b = document.createElement('p')
    
    span_a.classList.add('closer-modal')
    span_a.innerText = 'X'
    span_a.addEventListener('click', () => {
        document.querySelector('.container__modal').innerHTML = ''
        document.querySelector('.container__modal').close()
        
    })

    div_a.classList.add('modal-header')
        
    img.src = user.img
    img.classList.add('post-list--img')

    div_b.classList.add('modal-body')    
    
    span_b.innerText = user.user

    p_a.innerText = user.stack

    div_c.classList.add('modal-footer')    

    h2.innerText = post.title

    p_b.innerText = post.text

    div_a.append(img, div_b)
    div_b.append(span_b, p_a)
    div_c.append(h2, p_b)
    
    document.querySelector('.container__modal').append(span_a, div_a, div_c) 

}


createCard(posts, users)
















// const btn = document.querySelectorAll('.btn')

//         btn.forEach(x => {
//             x.addEventListener('click', () => x.innerHTML = "seguindo")
//         }
// )