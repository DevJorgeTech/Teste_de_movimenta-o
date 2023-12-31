function animacao_reloadTank1() {
    let recargaTank1 = document.querySelector(".recargaTank1")
    recargaTank1.classList.add('largura-alteradaTank1');

    setTimeout(() => {
        recargaTank1.classList.remove('largura-alteradaTank1');
      }, 4500); 
} 

function animacao_reloadTank2() {
    let recargaTank2 = document.querySelector(".recargaTank2")
    recargaTank2.classList.add('largura-alteradaTank2');

    setTimeout(() => {
      recargaTank2.classList.remove('largura-alteradaTank2');
      }, 4500); 
} 