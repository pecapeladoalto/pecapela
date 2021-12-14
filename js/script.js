var myHeaders = new Headers();

myHeaders.append('Content-Type', 'text/xml');

function openNav() {
    document.getElementById("mySidenav").style.width = "250px"
    document.getElementById("mySidenav").style.top = "0"
    document.getElementById("spanMenu").style.visibility = "hidden"
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById("spanMenu").style.visibility = "visible"
}

var menu = document.querySelector("#spanMenu")
menu.addEventListener("click", openNav)

var fechar = document.querySelector(".closebtn")
fechar.addEventListener("click", closeNav)