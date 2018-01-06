function setMenu(e) {
    sessionStorage.setItem("menu", e.innerHTML);
}
function callback() {
    let menu = sessionStorage.getItem('menu');
    let list = document.querySelectorAll(".w3-bar-item");
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (element.innerHTML == menu) {
            element.classList.toggle("w3-indigo");
            break;
        }
    }
}