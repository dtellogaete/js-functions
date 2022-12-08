document.addEventListener('keydown', function (event) {   

    /* Variable div */
    var div_one;

    /* Variable color*/
    var color;

    /* Condicionales */
    if (event.key === 'a') {
        color = "#FFE15D";
    } else if (event.key === 's') {
        color = "#F49D1A";
    } else if (event.key === 'd'){
        color = "#DC3535";
    }

    /* Pinta el div seleccionado*/
    document.addEventListener("click",(e) => {
        div_variable = document.getElementById(e.target.id);
        div_variable.style.backgroundColor = color;
    });
}    
);
