document.querySelectorAll(".qBox-item").forEach((item)=>{
    item.addEventListener("click",()=>{
        window.location.assign(window.location.href+item.getAttribute("data-link"));
    });
});