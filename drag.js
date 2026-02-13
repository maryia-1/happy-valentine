
document.addEventListener("DOMContentLoaded", function(){ 
    let catsWithHats = 0;
    let celebrationTriggered = false;

    const hats= document.querySelectorAll(".hat");
    const cats= document.querySelectorAll(".kitty");

    let draggedhat=null;

   hats.forEach(hat => {
       hat.addEventListener("dragstart", function(e) {
         draggedhat = hat;

         const width = hat.offsetWidth;
         const height = hat.offsetHeight;

         e.dataTransfer.setDragImage(hat, width / 2, height / 2);
        });
   });
 
    cats.forEach(kitty =>{
       kitty.addEventListener("dragover",function(e){
         e.preventDefault();
        });

       kitty.addEventListener("drop", function(e) {
         e.preventDefault();

         if (draggedhat) {

            const rect = kitty.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            kitty.appendChild(draggedhat);

            draggedhat.style.position = "absolute";
            draggedhat.style.width = "60px";

            const hatWidth = draggedhat.offsetWidth;
            const hatHeight = draggedhat.offsetHeight;

            draggedhat.style.left = (x - hatWidth / 2) + "px";
            draggedhat.style.top = (y - hatHeight / 2) + "px";
           
           if(!kitty.classList.contains("has-hat")){
            kitty.classList.add("has-hat");
            catsWithHats++;
           }
           if(catsWithHats ===cats.length && !celebrationTriggered){
            celebrationTriggered=true;
            launchConfetti();
            cats.forEach(cat=> {
                cat.classList.add("spin");
                setTimeout(()=>{
                    cat.classList.remove("spin");
                },800);
            })
           }
           draggedhat=null;
        }
        });

    });

});

function launchConfetti(){
    for(let i=0; i<150;i++){
        const confetti=document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 75%)`;
        confetti.style.left=Math.random()*window.innerWidth+"px";
        confetti.style.animationDelay=Math.random()*3+"s";
        document.body.appendChild(confetti);
        setTimeout(()=>{
          confetti.remove();
        },4000);
    }

}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("refreshbtn").addEventListener("click", function() {
    location.reload();
});
});

