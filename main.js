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
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "pink";
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)