const topButton = document.querySelector('.btn-up');

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        topButton.style.display = 'flex';
        topButton.style.animation = 'btn-up-on 0.5s ease-in-out forwards';
    } else {
        topButton.style.display = 'none';
        topButton.style.animation = 'btn-up-off 0.5s ease-in-out forwards';
    }
});
