const btns = document.querySelector('.header__bottom');
console.log(btns);
const body = document.querySelector('body');
const btnSwichTheme = document.getElementById('swich-theme');
console.log(btnSwichTheme);
const title = document.querySelector('.catalog__title')
const savedTheme = localStorage.getItem('theme');

if(savedTheme === 'darck-theme'){
    body.classList.add(savedTheme)
    btns.classList.add(savedTheme)
}else{
    body.classList.add('light-theme')
    btns.classList.add('light-theme__header-bottom')
}


btnSwichTheme.addEventListener('click', () => {
 if (body.classList.contains('light-theme') && btns.classList.contains('light-theme__header-bottom')){
    body.classList.remove('light-theme');
    btns.classList.remove('light-theme__header-bottom')
    body.classList.add('darck-theme')
    btns.classList.add('darck-theme__header-bottom')
    btnSwichTheme.style.color = '#fff'
    title.style.color = '#fff'; 
    localStorage.setItem('theme', 'darck-theme')
    } else {
            body.classList.remove('darck-theme');
            btns.classList.remove('darck-theme__header-bottom')
            body.classList.add('light-theme')
            btns.classList.add('light-theme__header-bottom')
            title.style.color = '#000';
            btnSwichTheme.style.color = '#000'
            localStorage.setItem('theme', 'light-theme')
        }
})
    










