document.querySelectorAll(".dropmenu-button").forEach(button =>{
    button.addEventListener("click",()=>{
        const list=button.nextElementSibling;
        const open=list.style.display==="block";
        document.querySelectorAll(".dropmenu-list").forEach(c=>c.style.display="none");
        list.style.display=open?"none":"block";
    });
});

document.addEventListener("click",e=>{
    if(!e.target.closest(".dropmenu")){
        document.querySelectorAll(".dropmenu-list").forEach(c=>c.style.display="none");
    }
});

function newsline() {
    const teisuu = document.getElementById("timeline");
    const oldline = teisuu.querySelector(".twitter-timeline");
    if (oldline) {
        teisuu.removeChild(oldline);
        const newTimeline = document.createElement("a");
        newTimeline.className = "twitter-timeline";
        newTimeline.href = "https://x.com/ProgramclubSD";
        newTimeline.setAttribute("data-lang", "ja");
        newTimeline.setAttribute("data-theme", "dark");
        newTimeline.setAttribute("data-tweet-limit", "3");
        newTimeline.textContent = "Posts by @ProgramclubSD";
        teisuu.appendChild(newTimeline);

        if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load(teisuu);
        }
    }
}

setInterval(newsline, 60000);


