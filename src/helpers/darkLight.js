function lightDark(selector) {

    const lightDark = document.querySelector(selector);

        lightDark.addEventListener('click', (e) => {

        const body = document.querySelector('body');

        body.classList.toggle('dark-mode-active');
        lightDark.classList.toggle('dark-mode-active');
    })

}

export default lightDark;