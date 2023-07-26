let $ = document
let loader = $.querySelector('.loader')
window.addEventListener('load' , () => {
    setTimeout(() => {
        loader.classList.add('hidden')
    },3000)
})