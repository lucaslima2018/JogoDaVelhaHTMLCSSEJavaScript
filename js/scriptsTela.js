(function () {
    const jogoDaVelha = new JogoDaVelha();
    const elementosCelula = document.querySelectorAll("[data-cell]");
    const tabuleiro = document.querySelector("[data-board]");
    const textoMensagemVitoria = document.querySelector("[data-winning-message-text]");
    const mensagemVitoria = document.querySelector("[data-winning-message]");
    const botaoReiniciar = document.querySelector("[data-restart-button]");

    let turnoDoCirculo;

    const iniciarJogo = () => {
        turnoDoCirculo = false;

        for (const cell of elementosCelula) {
            cell.classList.remove("circle");
            cell.classList.remove("x");
            cell.removeEventListener("click", handleClick);
            cell.addEventListener("click", handleClick, { once: true });
        }

        efeitoHover();
        mensagemVitoria.classList.remove("mostrarMensagemVitoria");
    };

    const finalizarJogo = (empate) => {
        if (empate) {
            textoMensagemVitoria.innerText = "Fim de Jogo! Houve um Empate!";
        } else {
            textoMensagemVitoria.innerText = turnoDoCirculo
                ? "Fim de Jogo! Jogador 2 Venceu!"
                : "Fim de Jogo! Jogador 1 Venceu!";
        }

        mensagemVitoria.classList.add("mostrarMensagemVitoria");
    };

    const efeitoHover = () => {
        tabuleiro.classList.remove("circle");
        tabuleiro.classList.remove("x");

        if (turnoDoCirculo) {
            tabuleiro.classList.add("circle");
        } else {
            tabuleiro.classList.add("x");
        }
    };

    const mudarTurnos = () => {
        turnoDoCirculo = !turnoDoCirculo;
      
        efeitoHover();
    };

    const handleClick = (e) => {
        // Colocar Marcação (X ou Círculo)
        const celula = e.target;
        const adicionarMarcacao = turnoDoCirculo ? "circle" : "x";

        jogoDaVelha.marcarCelula(celula, adicionarMarcacao);

        // Verificar Vitória
        const vitoria = jogoDaVelha.verificarVitoria(adicionarMarcacao);

        // Verificar Empate
        const empate = jogoDaVelha.verificarEmpate();

        if (vitoria) {
            finalizarJogo(false);
        } else if (empate) {
            finalizarJogo(true);
        } else {
            // Mudar Símbolo
            mudarTurnos();
        }
    };

    iniciarJogo();

    botaoReiniciar.addEventListener("click", iniciarJogo);
}) ();