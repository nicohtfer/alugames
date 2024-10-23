function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector(".dashboard__item__img");
    let botao = jogo.querySelector(".dashboard__item__button");
    let nomeJogo = jogo.querySelector(".dashboard__item__name");

   botao.innerHTML = `<a onclick="alterarStatus(1)" href="#" class="dashboard__item__button">Devolver</a>`
}
   