// change varbar on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// show/hide faqs answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'il uil-plus') {
            icon.className = "il uil-minus";
        } else {
            icon.className = "il uil-plus ";
        }
    })
})