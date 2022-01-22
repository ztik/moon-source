var navBarExpandButton = document.getElementById("mobile-menu-button");
var navBarExpansion = document.getElementsByClassName("mobilenavcontrol")[0];
navBarExpandButton.addEventListener("click", function() {
    if (navBarExpansion.style.maxHeight) {
        navBarExpansion.style.maxHeight = null;
    } else {
        navBarExpansion.style.maxHeight = navBarExpansion.scrollHeight + "px";
    }
});