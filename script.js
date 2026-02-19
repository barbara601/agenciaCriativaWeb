//menu hamburguer
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click',()=>{
    nav.classList.toggle('active');
});
const toggle = document.getElementById('theme-toggle');
//verifica se já existe tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☼';
} else {
    toggle.textContent = '☾';
}
//altera o tema
toggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggle.textContent = '☼';
    } else {
        localStorage.setItem('theme', 'light');
        toggle.textContent = '☾';
    }
});