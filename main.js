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

let HoverButton = React.createClass({
    getInitialState: function() {
        return { hover: false };
    },

    mouseOver: function() {
        this.setState({ hover: true });
    },

    mouseOut: function() {
        this.setState({ hover: false });
    },

    render: function() {
        let label = "foo";
        if (this.state.hover) {
            label = "bar";
        }
        return React.createElement(
            "button", { onMouseOver: this.mouseOver, onMouseOut: this.mouseOut },
            label
        );
    }
});

React.render(React.createElement(HoverButton, null), document.body);