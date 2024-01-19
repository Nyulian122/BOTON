let cuadro = document.querySelector('.cuadro')
let verde = document.querySelector(".btn_v");
let rojo = document.querySelector(".rojo")

function cambiarcolor(){
    cuadro.innerHTML = '<div class="btn_v"></div>';
}
verde.addEventListener('click' , cambiarcolor)

function cambiarcolor(){
    cuadro.innerHTML = '<div class="rojo"></div>';
}
verde.addEventListener('click' , cambiarcolor)

