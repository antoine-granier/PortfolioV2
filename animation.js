var typed = new Typed('#typed', {
    strings: ["développeur.", "geek.", "passionné."],
    typeSpeed: 200,
    backSpeed: 100,
    loop: true,
})

const navigation = document.querySelector('.navigation');
document.querySelector('.toggle').onclick = function() {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}

let section = document.querySelector('section');
let text = document.querySelector('.text');
let innerText = document.querySelector('.innerText');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    section.style.clipPath = "circle("+ value +"px at center center)";
    text.style.left = 100 - value/5 + "%";
    innerText.style.left = 100 - value/5 + "%";
})