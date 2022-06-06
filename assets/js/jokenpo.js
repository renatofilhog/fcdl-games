var maxVezes = prompt("Digite quantas vezes deseja jogar");
let vezesJogadas = 0;
let winPlayer = 0;
let winPc = 0;
document.querySelector(".scorePc").innerHTML = "0";
document.querySelector(".scorePlayer").innerHTML = "0";
// Ação de clique botão Jogar
document.getElementById("jogar").addEventListener("click",()=>{
    if(vezesJogadas < maxVezes){
        // Checagem para ver se foi selecionado alguma opção
        if(document.querySelector("input[name=jokenpo]:checked") == null){
            alert("Selecione uma opção para jogar");
        } else {
            /*
            *  Armazenando as opções escolhidas e fazendo o sorteio. 
            *  Encaminhamento para uma função que verifica o ganhador
            */
            let opcaoEscolhida = document.querySelector("input[name=jokenpo]:checked").value;
            let opcaoComputador = Math.floor(Math.random() * 3)+1;
            document.getElementById("resultado").innerHTML = "A Máquina escolheu: "+toText(opcaoComputador);
            document.getElementById("resultadoGeral").innerHTML = toWin(opcaoEscolhida,opcaoComputador);
            vezesJogadas++;
            if(vezesJogadas == maxVezes){
                ganhadorGeral();
                alert("Jogo acabou!");
                toOver();
            }
        }
    }  else {
        ganhadorGeral();
        alert("Jogo acabou!");
        toOver();
    }
});
/**
 * Função para ganhador geral
 */
const ganhadorGeral = ()=>{
    if(winPlayer > winPc){
        document.getElementById("resultadoGeral").innerHTML = "<hr>O Jogador ganhou o jogo";
    } else if(winPc > winPlayer) {
        document.getElementById("resultadoGeral").innerHTML = "<hr>O computador ganhou o jogo";
    } else {
        document.getElementById("resultadoGeral").innerHTML = "<hr>O jogo deu empate";
    }
}
/**
 * Função para desativar botões e inoperar comandos
 */
const toOver = ()=>{
    if(vezesJogadas >= maxVezes){
        document.querySelector("#jogar").style.display = "none";
    }
}
/*
*   Função para checar ganhador
*/
const toWin = (opcao1, opcao2)=>{
    if(opcao1 == opcao2) {
        return "Empate!";
    } else if (opcao1 == 1 && opcao2 == 3){
        winPlayer++;
        document.querySelector(".scorePlayer").innerHTML = winPlayer;
        return "Você venceu! (Pedra vence Tesoura)";
    } else if(opcao1 == 2 && opcao2 == 1){
        winPlayer++;
        document.querySelector(".scorePlayer").innerHTML = winPlayer;
        return "Você venceu! (Papel vence Pedra)";
    } else if(opcao1 == 3 && opcao2 == 2){
        winPlayer++;
        document.querySelector(".scorePlayer").innerHTML = winPlayer;
        return "Você venceu! (Tesoura vence papel)";
    } 
    // Caso perda
    else if (opcao2 == 1 && opcao1 == 3){
        winPc ++;
        document.querySelector(".scorePc").innerHTML = winPc;
        return "Você perdeu :( (Tesoura perde para Pedra)";
    } else if(opcao2 == 2 && opcao1 == 1){
        winPc ++;
        document.querySelector(".scorePc").innerHTML = winPc;
        return "Você perdeu :( (Pedra perde para Papel)";
    } else if(opcao2 == 3 && opcao1 == 2){
        winPc ++;
        document.querySelector(".scorePc").innerHTML = winPc;
        return "Você perdeu :( (Papel perde para Tesoura)";
    }
};
// Transformando opção escolhida em texto para apresentação ao usuário
const toText = (opcao) => {
    switch(opcao){
        case 1:
            return "Pedra";
            break;
        case 2:
            return "Papel";
            break;
        case 3:
            return "Tesoura";
            break;
        default:
            return "Erro na decodificação (switch)"+opcao;
    }
};

/*
*   Parte visual onde ao selecionanr um, ele inclui a classe que faz o estilo quando selecionado.
*/
document.querySelector(".pedra").addEventListener("click",()=>{
    document.querySelector("#pedra").checked = true;
    trocaClass(document.querySelector(".pedra"));
});
document.querySelector(".papel").addEventListener("click",()=>{
    document.querySelector("#papel").checked = true;
    trocaClass(document.querySelector(".papel"));
});
document.querySelector(".tesoura").addEventListener("click",()=>{
    document.querySelector("#tesoura").checked = true;
    trocaClass(document.querySelector(".tesoura"));
});

const trocaClass = (elem)=>{
    document.querySelector(".tesoura").classList.remove("checkRadio");
    document.querySelector(".papel").classList.remove("checkRadio");
    document.querySelector(".pedra").classList.remove("checkRadio");
    elem.classList.add("checkRadio");
};