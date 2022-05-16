let animais = ["BALEIA","CACHORRO","SAPO","CAVALO","COBRA","JACARE","ELEFANTE","GATO","LEAO","LOBO","OVELHA","PASSARO"];
let palavra;
let errosMax = 6;
let errosCom = 0;
let acertosMax;
let acertos = 0;
let letrasJogadas = [];
document.querySelector("#novoJogo").addEventListener("click",()=>{
    limpar();
    document.querySelector(".areaJogo").classList.remove("esconder");
    palavra = animais[Math.floor(Math.random()*animais.length)];
    acertosMax = palavra.length;
    for(let i = 0; i < palavra.length ; i++){
        let item = document.querySelector(".modelLetra").cloneNode(true);
        item.classList.remove("esconder");
        item.setAttribute("data-pos",i);
        document.querySelector(".letras").appendChild(item);
    }
    document.querySelector("#letraTentada").focus();
});
const limpar = ()=> {
    document.querySelector(".letras").innerHTML = "";
    document.getElementById("letraTentada").classList.remove("esconder");
    document.getElementById("tentarLetra").classList.remove("esconder");
    document.querySelector(".winner").classList.add("esconder");
    document.querySelector(".looser").classList.add("esconder");
    document.querySelector(".cabeca").classList.add("esconder");
    document.querySelector(".corpo").classList.add("esconder");
    document.querySelector(".braco-esquerdo").classList.add("esconder");
    document.querySelector(".braco-direito").classList.add("esconder");
    document.querySelector(".perna-esquerda").classList.add("esconder");
    document.querySelector(".perna-direita").classList.add("esconder");

    document.querySelector(".eOlho1").classList.add("esconder");
    document.querySelector(".eOlho2").classList.add("esconder");
    document.querySelector(".dOlho1").classList.add("esconder");
    document.querySelector(".dOlho2").classList.add("esconder");

}

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    document.querySelector(".beUsed").classList.add("esconder");
    let letraTmp = document.querySelector("#letraTentada").value.toUpperCase();
    if(!ganhou() && !perdeu() && letraTmp != ""){
        let continuar = true;
        let palavraTmp = palavra;
        let letraTmp = document.querySelector("#letraTentada").value.toUpperCase();
        if(letrasJogadas.findIndex((it)=>{return it == letraTmp}) == -1){
            letrasJogadas.push(letraTmp);
            let posLetra;
            if(palavraTmp.indexOf(letraTmp) == -1) {
                errosCom++;
                document.querySelector(".parte.esconder").classList.remove("esconder");
            }
            while(continuar){
                if(palavraTmp.indexOf(letraTmp) != -1){
                    posLetra = palavraTmp.indexOf(letraTmp);
                    palavraTmp = palavraTmp.replace(letraTmp,"#");
                    document.querySelector(".modelLetra[data-pos='"+posLetra+"']").innerHTML = letraTmp;
                    acertos++;
                } else {
                    continuar = false;
                }
            }
            if (ganhou()){
                document.querySelector(".winner").classList.remove("esconder");
                document.getElementById("letraTentada").classList.add("esconder");
                document.getElementById("tentarLetra").classList.add("esconder");
            } else if (perdeu()){
                document.querySelector(".looser").classList.remove("esconder");
                document.querySelector(".eOlho1").classList.remove("esconder");
                document.querySelector(".eOlho2").classList.remove("esconder");
                document.querySelector(".dOlho1").classList.remove("esconder");
                document.querySelector(".dOlho2").classList.remove("esconder");
                document.getElementById("letraTentada").classList.add("esconder");
                document.getElementById("tentarLetra").classList.add("esconder");
            }
        } else {
            document.querySelector(".beUsed").classList.remove("esconder");
        }
    } else if (ganhou()){
        document.querySelector(".winner").classList.remove("esconder");
        document.getElementById("letraTentada").classList.add("esconder");
        document.getElementById("tentarLetra").classList.add("esconder");
    } else if (perdeu()){
        document.querySelector(".looser").classList.remove("esconder");
        document.querySelector(".eOlho1").classList.remove("esconder");
        document.querySelector(".eOlho2").classList.remove("esconder");
        document.querySelector(".dOlho1").classList.remove("esconder");
        document.querySelector(".dOlho2").classList.remove("esconder");
        document.getElementById("letraTentada").classList.add("esconder");
        document.getElementById("tentarLetra").classList.add("esconder");
    }
    document.querySelector("#letraTentada").value = "";
    document.querySelector("#letraTentada").focus();
});

const ganhou = ()=> {
    if(acertos == acertosMax){
        return true;
    } else {
        return false;
    }
}

const perdeu = ()=> {
    if(errosMax == errosCom){
        return true;
    } else {
        return false;
    }
}