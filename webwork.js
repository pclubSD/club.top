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

function getform(){
    const spreadurl="https://script.google.com/macros/s/AKfycbwi76-3T09eYUA5FmHpLjXr2jstyBc25RmI2n7XNb0niQSO6on-sYYX4e2lBZdTLq7k/exec"
    const data={
        name:document.getElementById("name").value,
        mail:document.getElementById("mail").value,
        message:document.getElementById("message").value
    };
    fetch(spreadurl,{
        method:"POST",
        mode:"no-cors",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response=>console.log("Success:",response))
    .catch((error)=>console.error("Error:",error));
}


