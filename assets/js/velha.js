document.querySelectorAll(".padraoQuadrante").forEach((item)=>{
    item.addEventListener("click",()=>{
        marcar(item.getAttribute("id"),item);
    });
});

let arr = [0,0,0,0,0,0,0,0,0];
const marcar = (pos, item) => {
    if(verificaGanhador() == 3 && !verificaVelha()){
        if(verificaPosicao(pos-1)){
            //marrcar aqq
            arr[pos-1] = 1;
            item.innerHTML = "&#10060;"
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
            if(verificaGanhador() == 1) {
                console.log("X ganhou");
                document.querySelector(".resultado").innerHTML = "Jogador 1 (&#10060;) ganhou";
            } else if(verificaGanhador() == 2) {
                document.querySelector(".resultado").innerHTML = "Jogador 2 (&#11093;) ganhou";
            } else if(verificaVelha()) {
                document.querySelector(".resultado").innerHTML = "Deu velha &#128117;";
            }
        }
    } else if(verificaGanhador() == 1) {
        document.querySelector(".resultado").innerHTML = "Jogador 1 (&#10060;) ganhou";
    } else if(verificaGanhador() == 2) {
        document.querySelector(".resultado").innerHTML = "Jogador 2 (&#11093;) ganhou";
    } else if(verificaVelha()) {
        document.querySelector(".resultado").innerHTML = "Deu velha &#128117;";
    }
}

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

const reiniciarJogo = ()=> {
    vez = 1;
    arr = [0,0,0,0,0,0,0,0,0];
    document.querySelectorAll(".padraoQuadrante").forEach((item)=>{
        item.innerHTML = "";
    });
    document.querySelector(".resultado").innerHTML = "";
}

document.querySelector("button").addEventListener("click",reiniciarJogo);