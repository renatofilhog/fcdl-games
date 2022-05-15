document.querySelectorAll(".padraoQuadrante").forEach((item)=>{
    item.addEventListener("click",()=>{
        marcar(item.getAttribute("id"));
    });
});

let vez = 1;
let cont = 0;
let arr = [0,0,0,0,0,0,0,0,0];
const marcar = (pos) => {
    if(verificaGanhador() == 3 && !verificaVelha()){
        if(verificaPosicao(pos-1)){
            //marrcar aqq
            arr[pos-1] = vez;
            if(vez == 1) {
                vez = 2;
            } else {
                vez = 1;
            }
            if(verificaGanhador() == 1) {
                console.log("X ganhou");
            } else if(verificaGanhador() == 2) {
                console.log("O Ganhou");
            } else if(verificaVelha()) {
                console.log("Deu velha.");
            }
        }
    } else if(verificaGanhador() == 1) {
        console.log("X ganhou");
    } else if(verificaGanhador() == 2) {
        console.log("O Ganhou");
    } else if(verificaVelha()) {
        console.log("Deu velha.");
    }
    console.log("Vez do: "+vez +" Marca na posição: "+(pos-1));
    
    cont++
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