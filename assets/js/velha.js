let vez = 1;
document.querySelectorAll(".padraoQuadrante").forEach((item)=>{
    item.addEventListener("click",()=>{
        marcar(item.getAttribute("id"));
    });
});

const marcar = (num) => {
    console.log("Vez do: "+vez +" Marca na posição: "+num);
    if(vez == 1) {
        vez = 2;
    } else {
        vez = 1;
    }
}

const verificaVelha = ()=> {

}
const verificaPosicao = (pos)=> {

}