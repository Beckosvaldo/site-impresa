function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img/fechar.png";
    }
}
function Cadastro(){
    
}
const imgs = document.getElementById("ing");
const img = document.querySelectorAll("#ing img");

let idx = 0;

function carrosssel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 700}px)`
}

setInterval(carrosssel, 2500);

function Cadastro(){
    
        let planilhacadastro = document.getElementById("container");
        planilhacadastro.classList.toggle("hide");
}