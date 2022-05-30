// Ação de clique botão Jogar
document.getElementById("jogar").addEventListener("click",()=>{
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
    }    
});
/*
*   Função para checar ganhador
*/
const toWin = (opcao1, opcao2)=>{
    if(opcao1 == opcao2) {
        return "Empate!";
    } else if (opcao1 == 1 && opcao2 == 3){
        return "Você venceu! (Pedra vence Tesoura)";
    } else if(opcao1 == 2 && opcao2 == 1){
        return "Você venceu! (Papel vence Pedra)";
    } else if(opcao1 == 3 && opcao2 == 2){
        return "Você venceu! (Tesoura vence papel)";
    } 
    // Caso perda
    else if (opcao2 == 1 && opcao1 == 3){
        return "Você perdeu :( (Tesoura perde para Pedra)";
    } else if(opcao2 == 2 && opcao1 == 1){
        return "Você perdeu :( (Pedra perde para Papel)";
    } else if(opcao2 == 3 && opcao1 == 2){
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