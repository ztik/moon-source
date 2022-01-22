function scrollToLearnMore() {
    const element = document.getElementById("learnMoreSection");
    console.log(window)
    element.scrollIntoView({
        behavior: "smooth"
    })
    stop()
}

function scrollToPricing() {
    const element = document.getElementById("pricingSection");
    console.log(window)
    element.scrollIntoView({
        behavior: "smooth"
    })
    stop()
}