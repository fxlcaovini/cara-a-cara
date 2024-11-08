// Seleciona os elementos do DOM
const escolherBtn = document.getElementById("escolher-btn");
const popup = document.getElementById("popup-escolha");
const fecharPopupBtn = document.getElementById("fechar-popup");
const opcoesPersonagens = document.getElementById("opcoes-personagens");
const personagemEscolhidoCard = document.getElementById("personagem-escolhido-card");

// Mostra o popup quando o botão "escolher" é clicado
escolherBtn.addEventListener("click", () => {
    popup.classList.add("show"); // Exibe com animação
    popup.classList.remove("hide"); // Garante que o popup não fique oculto
});

// Fecha o popup ao clicar em "Fechar"
fecharPopupBtn.addEventListener("click", () => {
    popup.classList.add("hide"); // Inicia a animação de fechamento
    setTimeout(() => {
        popup.classList.remove("show", "hide"); // Remove as classes após a animação
    }, 500); // Tempo da animação
});

// Adiciona evento de clique para cada personagem no popup
opcoesPersonagens.addEventListener("click", (event) => {
    const personagemSlot = event.target.closest(".personagem-slot");
    
    if (personagemSlot) {
        const personagemNome = personagemSlot.getAttribute("data-nome");
        const personagemImgSrc = personagemSlot.querySelector("img").src;
        
        // Exibe o personagem escolhido no card fixo
        personagemEscolhidoCard.innerHTML = `
            <img src="${personagemImgSrc}" alt="${personagemNome}" width="50" height="50">
        `;
        personagemEscolhidoCard.style.display = "flex"; // Exibe o card
        popup.classList.add("hide"); // Inicia a animação de fechamento
        setTimeout(() => {
            popup.classList.remove("show", "hide"); // Remove as classes após a animação
        }, 500); // Tempo da animação
    }
});