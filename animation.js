//Typed animation
var typed = new Typed('#typed', {
    strings: ["développeur.", "geek.", "passionné."],
    typeSpeed: 200,
    backSpeed: 100,
    loop: true,
})

//Menu animation
const navigation = document.querySelector('.navigation');
document.querySelector('.toggle').onclick = function() {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}

const toggle = document.querySelector('.toggle');
const links = new Array();
for(i=0; i < 5; i++) {
    links.push(document.getElementById('link' + i))
}
//console.log(links);
links.forEach(element => {
    //console.log(element);
    element.addEventListener('click', function() {
        toggle.classList.remove('active');
        navigation.classList.remove('active');
    })
});

//Scroll circle and hidden animation
let scrollLogo = document.querySelector('.scroll-container');
let section = document.querySelector('section');
let text = document.querySelector('.text');
let innerText = document.querySelector('.innerText');
window.addEventListener('scroll', function () {
    if(window.pageYOffset == 0) {
        scrollLogo.style.visibility = "visible";
    }
    else {
        scrollLogo.style.visibility = "hidden";
    }
    let value = window.scrollY;
    section.style.clipPath = "circle("+ value +"px at center center)";
    text.style.left = 100 - value/5 + "%";
    innerText.style.left = 100 - value/5 + "%";
});