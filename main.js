/*const menuLinks = document.querySelectorAll('menu__link' [data - goto]);
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLink.eddEventListener("click", onMenuLinkClick);

    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.data.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClient.Rect().top + pageXOffset - document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }

    }
}*/

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "#EBFFED";
    } else {
        document.body.style.backgroundColor = "#FEFEFE";
    }
}

let x = window.matchMedia("(max-width: 767px)")
myFunction(x)
x.addListener(myFunction)

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
        } else {
            $('body').css('overlow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');