function openNav() {
    document.querySelector("#mySidenav").classList.add("openNav")
    document.querySelector("#spanMenu").classList.add("hidespanMenu")
}
  
function closeNav() {
    document.querySelector("#mySidenav").classList.remove("openNav")
    document.querySelector("#spanMenu").classList.remove("hidespanMenu")
}

var menu = document.querySelector("#spanMenu")
menu.addEventListener("click", openNav)

var fechar = document.querySelector(".closebtn")
fechar.addEventListener("click", closeNav)