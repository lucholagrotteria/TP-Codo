/* Funciones anonimas autoejecutables*/
    const $btnOpen = document.querySelector(".menu-boton"),
    $menu = document.querySelector(".navbar");
    
    //PARA CAMBIAR EL ICONO CUANDO SE HACE CLICK EN EL MENU

    $btnOpen.addEventListener("click", e => {
        $btnOpen.firstElementChild.classList.toggle("none");
        $btnOpen.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    //PARA QUE CIERRE EL MENU AL ABRIR OTRA PAGINA 

    document.addEventListener("click", e => {
        if (!e.target.matches(".navbar a")) return false;
        $btnOpen.firstElementChild.classList.remove("none");
        $btnOpen.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    })

