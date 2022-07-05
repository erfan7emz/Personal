document.querySelector(".toggle-button").onclick = expand;
document.querySelector(".x-button").onclick = expand;
const link = document.querySelectorAll("nav ul li a");
link.forEach(a => {
    a.onclick = collapse;
});

function expand() {
    const togglebtn = document.querySelector('.toggle-button');
    const nav = document.querySelector('nav');
    const x = document.querySelector('.x-button');
    nav.classList.toggle('active');
    x.classList.toggle('active');
}

function collapse() {
    $("nav").removeClass("active");
    $(".x-button").removeClass("active");
}