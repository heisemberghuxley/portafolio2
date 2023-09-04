let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portafolio-box, .contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});



const typed = new Typed('.multiple-text',{
    strings: ['Desarrolador full stack','Javascript Developer', 'Database Novice'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});


document.getElementById("read-more").addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que la página se desplace hacia arriba
    var fullText = document.querySelector(".full-text");
    if (fullText.style.display === "none") {
        fullText.style.display = "block";
    } else {
        fullText.style.display = "none";
    }
});

document.getElementById("read-more-dos").addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que la página se desplace hacia arriba
    var fullText = document.querySelector(".services-box .full-text");
    if (fullText.style.display === "none") {
        fullText.style.display = "block";
    } else {
        fullText.style.display = "none";
    }
});


document.getElementById("read-more-tres").addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que la página se desplace hacia arriba
    var fullText = document.querySelector(".services-box .full-text2"); // Cambiar la selección aquí
    if (fullText.style.display === "none") {
        fullText.style.display = "block";
    } else {
        fullText.style.display = "none";
    }
});

