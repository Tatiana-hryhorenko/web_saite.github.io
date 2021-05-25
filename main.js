function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "#EBFFED";
    } else {
        document.body.style.backgroundColor = "#FEFEFE";
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}