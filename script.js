const img = document.querySelector('img')

const button = document.querySelector('.hide')


button.addEventListener('click', () => {
    img.classList.toggle('active')
    console.log(button.textContent)
        if(button.textContent==='hide'){
            button.textContent='show'
        }else{
            return button.textContent='hide'
        }
})

const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const reset = document.querySelector('.reset')
 

minus.addEventListener('click', () => {
    const count = -0
    for (let i=0; i<minus; i++) {
        count--
    }
    console.log(minus.textContent);
})


plus.addEventListener('click', () => {
    const count = 0 
    for (let i=0; i<plus; i++) {
        count++
    }
    console.log(plus.textContent)
        
})
