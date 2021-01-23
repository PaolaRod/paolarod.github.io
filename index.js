let burgerMenu = document.getElementById('burger-menu');
let show = document.getElementById('menu');
let menuCenter = document.getElementById('ml-auto');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('close');
    show.classList.toggle('show');
    menuCenter.classList.toggle('ml-auto');
});

const bgChanger = () => {
    if (this.scrollY > this.innerHeight / 2) {
        document.body.classList.add('bg-active');
    } else {
        document.body.classList.remove('bg-active');
    }
};

window.addEventListener('scroll', bgChanger);