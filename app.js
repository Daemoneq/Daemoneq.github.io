const sideBar = document.querySelector(".sideBar")
const darkArea = document.querySelector(".darkArea")
const sideBarMenu = document.querySelector(".sideBarMenu")
const sideBar__icon = document.querySelector(".sideBar__icon")
const productsBar__button = document.querySelector(".productsBar__button")
const productsBar__list = document.querySelector(".productsBar__list")


let sideBarCounter = 0;
function handleProductsBar() {
    if (sideBarCounter % 2 === 0) {
        productsBar__list.classList.add("productsBar__list--active")
    } else {
        productsBar__list.classList.remove("productsBar__list--active")
    }
    sideBarCounter += 1;
}

productsBar__button.addEventListener("click", handleProductsBar)


let counter = 0;
function x() {
    if (counter % 2 === 0) {
        sideBar.classList.add("sideBar--active");
        sideBarMenu.classList.add("sideBarMenu--active");
        darkArea.classList.add("darkArea--active")
        sideBar__icon.classList.add("sideBar__icon--unactive")
    } else {
        sideBar.classList.remove("sideBar--active");
        sideBarMenu.classList.remove("sideBarMenu--active");
        darkArea.classList.remove("darkArea--active")
        sideBar__icon.classList.remove("sideBar__icon--unactive")
    }
    counter += 1;
}

function backSideBar() {
    sideBar.classList.remove("sideBar--active");
}


darkArea.addEventListener("click", x)
sideBar.addEventListener("click", x)


// fourthScreenSlider

const promotions__navButton1 = document.querySelector(".promotions__navButton1");
const promotions__navButton2 = document.querySelector(".promotions__navButton2");
const promotions__navButton3 = document.querySelector(".promotions__navButton3");

const promoSliderTopSide = document.querySelector(".promoSliderTopSide");
const promoSliderIcons = document.querySelector(".promoSliderIcons");

function handleButton1() {
    promoSliderTopSide.classList.add("margin1")
    promoSliderTopSide.classList.remove("margin2")
    promoSliderTopSide.classList.remove("margin3")
    promoSliderIcons.classList.add("margin1")
    promoSliderIcons.classList.remove("margin2")
    promoSliderIcons.classList.remove("margin3")
    promotions__navButton1.classList.add("promotions__navButton--active")
    promotions__navButton2.classList.remove("promotions__navButton--active")
    promotions__navButton3.classList.remove("promotions__navButton--active")
}
function handleButton2() {
    promoSliderTopSide.classList.add("margin2")
    promoSliderTopSide.classList.remove("margin1")
    promoSliderTopSide.classList.remove("margin3")
    promoSliderIcons.classList.add("margin2")
    promoSliderIcons.classList.remove("margin1")
    promoSliderIcons.classList.remove("margin3")
    promotions__navButton1.classList.remove("promotions__navButton--active")
    promotions__navButton2.classList.add("promotions__navButton--active")
    promotions__navButton3.classList.remove("promotions__navButton--active")
}
function handleButton3() {
    promoSliderTopSide.classList.add("margin3")
    promoSliderTopSide.classList.remove("margin1")
    promoSliderTopSide.classList.remove("margin2")
    promoSliderIcons.classList.add("margin3")
    promoSliderIcons.classList.remove("margin1")
    promoSliderIcons.classList.remove("margin2")
    promotions__navButton1.classList.remove("promotions__navButton--active")
    promotions__navButton2.classList.remove("promotions__navButton--active")
    promotions__navButton3.classList.add("promotions__navButton--active")
}


promotions__navButton1.addEventListener("click", handleButton1)
promotions__navButton2.addEventListener("click", handleButton2)
promotions__navButton3.addEventListener("click", handleButton3)