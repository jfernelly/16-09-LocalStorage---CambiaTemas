let tema;

const dark = document.getElementById('dark');
const light = document.getElementById('light');

dark.addEventListener('click', temas());
light.addEventListener('click', temas());


tema = localStorage.getItem('tema');

function temas() {
    if (dark.addEventListener) {
        document.getElementById('container').classList.add('dark')
        localStorage.setItem("tema", 'dark')
    } else {
        document.getElementById('container').classList.remove('dark');
    }

}