const menuLinks = document.querySelectorAll('menu__link' [data - goto]);
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLink.eddEventListener("click", onMenuLinkClick);

    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.data.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClient.Rect().top + pageXOffset - document.querySelector('header').offsetHeight;
        }

    }
}