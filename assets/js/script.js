/**
 * Verifica todos os itens e pega o atributo data-link de cada um para que os mesmos tenham
 * o direcionamento correto
 */
document.querySelectorAll(".qBox-item").forEach((item)=>{
    item.addEventListener("click",()=>{
        window.location.href = item.getAttribute("data-link");
    });
});