/*scroll animation*/
AOS.init({
    duration: 2000
});

/*movile nav*/
const header__movile = document.getElementById('header__movile');
const header__nav = document.getElementById('header__nav');

header__movile.addEventListener('click', () => {
    header__nav.classList.toggle('header__nav-show');
});

/*go to the top*/

const button = document.getElementById('go-top__img')

function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

window.onscroll = function () { scrollFunction() };

/*form function*/

const form = document.getElementById('form');
const mailto = document.getElementById('mailto');

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))
    mailto.setAttribute('href', `mailto:jennifercardenasnicole@gmail.com?subject=${form.get('subject')} ${form.get('name')}&body=${form.get('message')}`)
    mailto.click()
}