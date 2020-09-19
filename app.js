const sideBar = document.querySelector(".sideBar")
const darkArea = document.querySelector(".darkArea")
const sideBarMenu = document.querySelector(".sideBarMenu")
const sideBar__icon = document.querySelector(".sideBar__icon")


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