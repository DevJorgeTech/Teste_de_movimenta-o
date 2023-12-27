let tiroTank1 = document.getElementById("tiroTank1")

document.addEventListener("keydown", function tiroDoTank1(event){
    if(event.key == " "){
        tiroTank1.style.display = "block"
        var interval = window.setInterval(animate, 100);
        if (getComputedStyle(tiroTank1).left < window.innerWidth) {
            alert("aqui")
            window.clearInterval(interval);
        }
    }
})

function animate() {
    increment = -25
    possitionTiroTank1 = parseInt(getComputedStyle(tiroTank1).left)
    tiroTank1.style.left = possitionTiroTank1 + increment + "px";
    
    if (possitionTiroTank1 < - 750){
        tiroTank1.style.display = "none"
        tiroTank1.style.left = 0
    }
   
}
  
