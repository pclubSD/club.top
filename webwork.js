document.querySelectorAll(".menu-button").forEach(button =>{
    button.addEventListener("click",()=>{
        const list=button.nextElementSibling;
        const open=list.style.display==="block";
        document.querySelectorAll(".menu-list").forEach(c=>c.style.display="none");
        list.style.display=open?"none":"block";
    });
});

document.addEventListener("click",e=>{
    if(!e.target.closest(".dropmenu")){
        document.querySelectorAll(".menu-list").forEach(c=>c.style.display="none");
    }
});



