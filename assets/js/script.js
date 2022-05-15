document.querySelectorAll(".qBox-item").forEach((item)=>{
    item.addEventListener("click",()=>{
        window.location.href = item.getAttribute("data-link");
    });
});