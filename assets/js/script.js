let tema;

const dark = document.getElementById('dark')

dark.addEventListener('click', () => {
    document.getElementById('container').classList.add('dark')
    localStorage.setItem("tema", 'dark')
    let tema = localStorage.getItem('tema');
    console.log(tema)
})

const light = document.getElementById('light')

light.addEventListener('click', () => {
    document.getElementById('container').classList.remove('dark');
    localStorage.setItem("tema", 'light');
    let tema = localStorage.getItem('tema');
    console.log(tema)
})

tema = localStorage.getItem('tema');
if (tema == "dark") {
    document.getElementById('container').classList.add('dark')
} else {
    document.getElementById('container').classList.remove('dark');
}