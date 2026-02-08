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

document.addEventListener("DOMContentLoaded",()=>{
    const a=document.querySelectorAll(".setumei");
    const ob=new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },{threshold:0.2});
    a.forEach(al=>ob.observe(al));
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
    .then(() => {
        alert("送信が完了しました！");
        document.getElementById("name").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("message").value = "";
    })
    .catch((error) => {
        alert("送信に失敗しました。時間をおいて再度お試しください。");
        console.error("Error:", error);
    });

}


