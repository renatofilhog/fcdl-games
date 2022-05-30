/**
 * Definindo primeiras variáveis. Usando um array para guardar as palavras que serão sorteadas no jogo
 * errosMax --> Define a quantidade máxima de erros possíveis. 6 é o numero de camadas SVG para formação do boneco na forca
 * errosCom --> É armazenado a quantidade de vezes que o usuário errou. Durante o programa esta variável tende a mudar.
 * acertosMax --> Define a quantidade de acertos possíveis, esta é definida de acordo com a quantidade de letras da palavra
 * acertos --> É armazenado a quantidade de vezes que o usuário acertou. Durante o programa esta variável tende a mudar.
 * letrasJogadas --> Armazena as letras que o usuário já tentou, para evitar acertos ou erros duplos é necessário a mesma.
 */
let animais = ["BALEIA","CACHORRO","SAPO","CAVALO","COBRA","JACARE","ELEFANTE","GATO","LEAO","LOBO","OVELHA","PASSARO"];
let palavra;
let errosMax = 6;
let errosCom = 0;
let acertosMax;
let acertos = 0;
let letrasJogadas = [];
// Ações ao clicar no botão Novo jogo
document.querySelector("#novoJogo").addEventListener("click",()=>{
    // Função para limpar as areas e deixar-las preparadas para o próximo sorteio
    limpar();
    /**
     * Retirando as classes que escondem os elementos da tela.
     * Sorteando a palavra de acordo com a quantidades de elementos no array
     */
    document.querySelector(".areaJogo").classList.remove("esconder");
    palavra = animais[Math.floor(Math.random()*animais.length)];
    acertosMax = palavra.length;
    /**
     * Encaixando os elementos para que fiquem os espaços em branco e adicionem os quadrados.
     */
    for(let i = 0; i < palavra.length ; i++){
        let item = document.querySelector(".modelLetra").cloneNode(true);
        item.classList.remove("esconder");
        item.setAttribute("data-pos",i);
        document.querySelector(".letras").appendChild(item);
    }
    // Comando simples para deixar o foco direto no local de digitação da letra. Muitíssimo útil na experiencia do usuário.
    document.querySelector("#letraTentada").focus();
});
/**
 * Função para limpar todo o escopo da forca e remover os traços em branco
 * Prepara para o novo sorteio
 */
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
/**
 * Para controle do envio de letras uso um formulário. 
 * Neste ele faz todo o procesos de previnir que tenha a ação padrão de 
 * atualizar a página para algum method (GET OU POST)
 * Logo após ele armazena a letra escolhida na variável *letraTmp*.
 * Faz verificações para saber se o jogo já acabou ou não,
 * caso negativo ele prepara as variáveis para fazer o loop 
 * onde é procurado dentro da palavra a letra que foi submetida
 */
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    document.querySelector(".beUsed").classList.add("esconder");
    let letraTmp = document.querySelector("#letraTentada").value.toUpperCase();
    if(!ganhou() && !perdeu() && letraTmp != ""){
        let continuar = true;
        let palavraTmp = palavra;
        let letraTmp = document.querySelector("#letraTentada").value.toUpperCase();
        /**
         * Verifica se a letra já existe no array de letras jogadas para evitar duplos acertos/erros
         */
        if(letrasJogadas.findIndex((it)=>{return it == letraTmp}) == -1){
            letrasJogadas.push(letraTmp);
            let posLetra;
            if(palavraTmp.indexOf(letraTmp) == -1) {
                errosCom++;
                document.querySelector(".parte.esconder").classList.remove("esconder");
            }
            /**
             * Loop onde irá procurar a posição da letra, será substituida por # e colocado na exata posição em tela a letra achada
             * o comando replace só substitui o primeiro indice achado. Diferente do replaceAll
             * O Loop funciona até que não se ache mais a letra dentro da palavra
             */
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
            /**
             * Faz a checagem caso esta jogada tenha sido decisiva para saber se ganhou ou perdeu
             * Nos IF's estão constando os comandos que alteram a estrutura do CSS para esconder ou mostrar elementos necessários.
             * 
             */
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
            /**
             * Caso a letra tenha sido usado, o CSS é alterado para mostrar a mensagem.
             */
            document.querySelector(".beUsed").classList.remove("esconder");
        }
        /**
         * Caso burle o fato de desabilitação do campo input, aqui se faz uma verificação de vitória ou derrota
         */
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
    // Mais uma vez, dois comandos simples que tira o que foi digitado e repõe o foco
    // Muito bom no uso do sisteminha.
    document.querySelector("#letraTentada").value = "";
    document.querySelector("#letraTentada").focus();
});

// verificação SImples se os acertosMax é igual ao numero de acertos do usuário
const ganhou = ()=> {
    if(acertos == acertosMax){
        return true;
    } else {
        return false;
    }
}
// verificação SImples se os errosMax é igual ao numero de erros cometidos do usuário
const perdeu = ()=> {
    if(errosMax == errosCom){
        return true;
    } else {
        return false;
    }
}