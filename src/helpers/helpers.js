function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    let marqueeInterval;

    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);

    function startMarquee() {
        marqueeInterval = setInterval(function () {
            firstElement.style.marginLeft = `-${i}px`;
            if (i > firstElement.clientWidth) {
                i = 0;
            }
            i = i + speed;
        }, 0);
    }

    function stopMarquee() {
        clearInterval(marqueeInterval);
    }

    parentSelector.addEventListener('mouseenter', stopMarquee);
    parentSelector.addEventListener('mouseleave', startMarquee);

    startMarquee();
}

function Burger() {
    const burger = document.querySelector('.menu-burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const removeScroll = document.querySelector('body');
    
    burger.addEventListener('click', () => {
        if(!mobileMenu.classList.contains('active')){
            mobileMenu.classList.add('active');
        } else {
            mobileMenu.classList.remove('active');
        }

        if(!burger.classList.contains('open')){
            burger.classList.add('open');
        } else {
            burger.classList.remove('open');
        }

        if(!removeScroll.classList.contains('scroll-remove')){
            removeScroll.classList.add('scroll-remove');
        } else {
            removeScroll.classList.remove('scroll-remove');
        }
    });
}



export { Burger, Marquee };