function animacao_reload() {
    let recargaTank1 = document.querySelector(".recargaTank1")
    recargaTank1.classList.add('largura-alteradaTank1');

    setTimeout(() => {
        recargaTank1.classList.remove('largura-alteradaTank1');
      }, 4500); 
} 