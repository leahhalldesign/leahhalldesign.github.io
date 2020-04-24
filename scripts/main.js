const toggleMenu = () => {
    document.querySelector('#nav').classList.toggle(show);

}

document.querySelector('#menu').addEventListener('click', toggleMenu);
