// // Add mediaQuery to Javascript, pending
//
// const mediaQuery = window.matchMedia('screen and (max-width: 750px)');
//
// function changeMediaQuery(e) {
//     if (e.matches) {
//         console.log('MediaQuery matched')
//     } else {
//
//     }
// }
//
// mediaQuery.addEventListener('change',changeMediaQuery)


let burgerMenu = document.getElementById('burger-menu');
let show = document.getElementById('menu');
let menuCenter = document.getElementById('ml-auto');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('close');
    show.classList.toggle('show');
    menuCenter.classList.toggle('ml-auto');
});

// contact form
const inputs = document.querySelectorAll('.input');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
    parent.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
})

// contact form
