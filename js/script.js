function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.top = "80px";
    document.getElementById("spanMenu").style.visibility = "hidden";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("spanMenu").style.visibility = "visible";
}

var topo = window.scrollY;
if (topo > 48) {
  document.getElementById("menu").style.position = "fixed";
}