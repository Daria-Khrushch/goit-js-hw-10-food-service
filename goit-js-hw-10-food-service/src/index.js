import './styles.css';
import menu from './menu.json';
import menuTemlate from './templates/menu.hbs';

const menuGallery = document.querySelector(".js-menu");
menuGallery.insertAdjacentHTML('afterbegin', menuTemlate(menu));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchTheme = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

switchTheme.addEventListener('change', changeTheme);

if (localStorage.getItem('theme') === Theme.DARK) {
    body.classList.toggle(Theme.DARK);
    switchTheme.checked = true;
}
else {
    body.classList.toggle(Theme.LIGHT);
    switchTheme.checked = false;  
}

function changeTheme(evt) {
    if (evt.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        body.classList.add(localStorage.getItem('theme'));
    }
    else {
        localStorage.setItem('theme', Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        body.classList.add(localStorage.getItem('theme'));
    }
}



