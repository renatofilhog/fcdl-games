/**
 * Adiciona para cada item do quadrante a ação do clique Marcar
 * Serve para justamente marcar o item correto no local correto
 */
document.querySelectorAll(".padraoQuadrante").forEach((item)=>{
    item.addEventListener("click",()=>{
        marcar(item.getAttribute("id"),item);
    });
});
// Array para definir as posições do jogo da velha
let arr = [0,0,0,0,0,0,0,0,0];

/**
 * Função onde após identificado clique no quadrante, a mesma se
 * encarrega de fazer a marcação visual e inserção da posição no array
 */
const marcar = (pos, item) => {
    if(verificaGanhador() == 3 && !verificaVelha()){
        if(verificaPosicao(pos-1)){
            // pos-1 pois no html está como quadrante de 1 a 9, e o array é de 0 a 8
            arr[pos-1] = 1;
            // Emoticon de X html
            item.innerHTML = "&#10060;"
            // Temos um laço de repetição com flag pois ele irá procurar uma posição vazia no array para colocar a vez do O
            let continuar = true;
            while(continuar){
                let posAleatoria = Math.floor(Math.random()*9);
                if(arr[posAleatoria] == 0) {
                    arr[posAleatoria] = 2;
                    continuar = false;
                    let quadrante = ".quadrante"+(posAleatoria+1);
                    document.querySelector(quadrante).innerHTML = "&#11093;";
                }
            }
            /**
             * Ao fim de cada jogada é verificado o ganhador ou se deu empate (velha)
             * com isso ele mostra a mensagem de acordo com o que foi dado.
             */
            if(verificaGanhador() == 1) {
                console.log("X ganhou");
                document.querySelector(".resultado").innerHTML = "Jogador 1 (&#10060;) ganhou";
            } else if(verificaGanhador() == 2) {
                document.querySelector(".resultado").innerHTML = "Jogador 2 (&#11093;) ganhou";
            } else if(verificaVelha()) {
                document.querySelector(".resultado").innerHTML = "Deu velha &#128117;";
            }
        }
        /**
         * Redundancia de verificação caso a de cima não funcione
         */
    } else if(verificaGanhador() == 1) {
        document.querySelector(".resultado").innerHTML = "Jogador 1 (&#10060;) ganhou";
    } else if(verificaGanhador() == 2) {
        document.querySelector(".resultado").innerHTML = "Jogador 2 (&#11093;) ganhou";
    } else if(verificaVelha()) {
        document.querySelector(".resultado").innerHTML = "Deu velha &#128117;";
    }
}

/**
 * Funções de verificações. Velha, posição e ganhador
 * as mesmas retornam true ou false
 * exceto a de verifica ganhador que pode retornar 1, 2 ou 3. Onde 3 significa algum erro
 * ou algum resultado fora do esperado
 */
const verificaVelha = ()=> {
    if(arr.findIndex((item)=>{return item==0}) != -1){
        return false;
    } else {
        return true;
    }
}
const verificaPosicao = (pos)=> {
    if(arr[pos] == 0){
        return true;
    } else {
        return false;
    }
}
const verificaGanhador = ()=>{
    if(arr[0] == 1 && arr[1]==1 && arr[2] == 1) {
        return 1;
    } else if(arr[3] == 1 && arr[4]==1 && arr[5] == 1) {
        return 1;
    } else if(arr[6] == 1 && arr[7]==1 && arr[8] == 1) {
        return 1;
    } else if(arr[0] == 1 && arr[3]==1 && arr[6] == 1) {
        return 1;
    } else if(arr[1] == 1 && arr[4]==1 && arr[7] == 1) {
        return 1;
    } else if(arr[2] == 1 && arr[5]==1 && arr[8] == 1) {
        return 1;
    } else if(arr[0] == 1 && arr[4]==1 && arr[8] == 1) {
        return 1;
    } else if(arr[2] == 1 && arr[4]==1 && arr[6] == 1) {
        return 1;
    } else if(arr[0] == 2 && arr[1]==2 && arr[2] == 2) {
        return 2;
    } else if(arr[3] == 2 && arr[4]==2 && arr[5] == 2) {
        return 2;
    } else if(arr[6] == 2 && arr[7]==2 && arr[8] == 2) {
        return 2;
    } else if(arr[0] == 2 && arr[3]==2 && arr[6] == 2) {
        return 2;
    } else if(arr[1] == 2 && arr[4]==2 && arr[7] == 2) {
        return 2;
    } else if(arr[2] == 2 && arr[5]==2 && arr[8] == 2) {
        return 2;
    } else if(arr[0] == 2 && arr[4]==2 && arr[8] == 2) {
        return 2;
    } else if(arr[2] == 2 && arr[4]==2 && arr[6] == 2) {
        return 2;
    } else {
        return 3;
    }
}

/**
 * Função simples onde ao clicar em novo jogo, ele tira todas as jogadas e limpa o array
 * muito bom para ajudar o usuario a permanecer mais tempo.
 */
const reiniciarJogo = ()=> {
    vez = 1;
    arr = [0,0,0,0,0,0,0,0,0];
    document.querySelectorAll(".padraoQuadrante").forEach((item)=>{
        item.innerHTML = "";
    });
    document.querySelector(".resultado").innerHTML = "";
}

document.querySelector("button").addEventListener("click",reiniciarJogo);