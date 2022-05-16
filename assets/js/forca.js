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
    // console.log(palavra.length);
    // console.log("A palavra é: "+palavra);
});
const limpar = ()=> {

}

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    if(!ganhou() && !perdeu()){
        let continuar = true;
        let palavraTmp = palavra;
        let letraTmp = document.querySelector("#letraTentada").value.toUpperCase();
        if(letrasJogadas.findIndex((it)=>{return it == letraTmp}) == -1){
            letrasJogadas.push(letraTmp);
            let posLetra;
            if(palavraTmp.indexOf(letraTmp) == -1) {
                errosCom++;
                document.querySelector(".parte.esconder").classList.remove("esconder");
                console.log("Entra toda vez? "+palavraTmp.indexOf(letraTmp));
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
                console.log("Ganhou!");
                document.getElementById("letraTentada").setAttribute("disabled","yes");
                document.getElementById("tentarLetra").setAttribute("hidden","yes");
            } else if (perdeu()){
                console.log("Perdeu!");
                document.getElementById("letraTentada").setAttribute("disabled","yes");
                document.getElementById("tentarLetra").setAttribute("hidden","yes");
            }
        } else {
            console.log("Letra já usada");
        }
    } else if (ganhou()){
        console.log("Ganhou!");
        document.getElementById("letraTentada").setAttribute("disabled","yes");
        document.getElementById("tentarLetra").setAttribute("hidden","yes");
    } else if (perdeu()){
        console.log("Perdeu!");
        document.getElementById("letraTentada").setAttribute("disabled","yes");
        document.getElementById("tentarLetra").setAttribute("hidden","yes");
    }
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