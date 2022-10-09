//change navbar styles on scrol

window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('widow-scroll', window.scrollY > 0)
})