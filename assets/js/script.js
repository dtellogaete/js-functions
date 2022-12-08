function pintar(color){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = color
}

pintar("green");

ele = document.getElementById("ele1");
ele.addEventListener("click", () => ele.style.backgroundColor = "yellow");

