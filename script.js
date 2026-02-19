//menu hamburguer
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click',()=>{
    nav.classList.toggle('nav--active');
});
//toggle tema
const toggle = document.getElementById('theme-toggle');
//verifica se já existe tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('body--dark');
    toggle.textContent = '☼';
} else {
    toggle.textContent = '☾';
}
//altera o tema
toggle.addEventListener('click',()=>{
    document.body.classList.toggle('body--dark');
    if (document.body.classList.contains('body--dark')) {
        localStorage.setItem('theme', 'dark');
        toggle.textContent = '☼';
    } else {
        localStorage.setItem('theme', 'light');
        toggle.textContent = '☾';
    }
});