function darkMode(){
    var b = document.getElementsByClassName("contenedor");
     b[0].style.backgroundColor = "#000000";
     b[0].style.color = "white";
}

function normalMode(){
    var b = document.getElementsByClassName("contenedor");
     b[0].style.backgroundColor = null;
     b[0].style.color = null;
}
