const hamburguesa = document.getElementById('hamburguesa');
const nav = document.querySelector('.Nav-rigth-section');

hamburguesa.addEventListener('click', () => {
    nav.classList.toggle('active');
});
const links = document.querySelectorAll('.Nav-rigth-section a');

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});