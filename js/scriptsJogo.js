class JogoDaVelha {
    constructor() {

        const elementosCelula = document.querySelectorAll("[data-cell]");

        const combinacoesDeVitoria = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        this.verificarVitoria = function (jogadorAtual) {
            return combinacoesDeVitoria.some((combinacao) => {
                return combinacao.every((indice) => {
                    return elementosCelula[indice].classList.contains(jogadorAtual);
                });
            });
        };

        this.verificarEmpate = function () {
            return [...elementosCelula].every((celula) => {
                return celula.classList.contains("x") || celula.classList.contains("circle");
            });
        };

        this.marcarCelula = function (celula, adicionarMarcacao) {
            celula.classList.add(adicionarMarcacao);
        };

        return this;
    }
};