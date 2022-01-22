function backToTop() {
    const scrollStatus = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollStatus > 0) {
        window.requestAnimationFrame(backToTop);
        window.scrollTo(0, scrollStatus - scrollStatus / 15);
    }
}
let btn = document.getElementById("topButton");
let scrollingY = window.scrollY;
window.onscroll = function() {
    scrollFunction();
    scrollingY = window.scrollY;
};
window.onload = function() {
    btn.style.transitionDuration = "0.6s"
}

function scrollFunction() {
    if (window.scrollY > 0) {
        btn.style.display = "block";
        btn.style.backgroundColor = "#000";
        btn.style.color = "#fff";
        btn.style.opacity = "0.5";
    } else {
        btn.style.backgroundColor = "transparent";
        btn.style.color = "transparent";
        btn.style.opacity = "0";
    }
}