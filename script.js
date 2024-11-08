// script.js

// Seleciona todos os elementos de personagem
const personagemSlots = document.querySelectorAll(".personagem-slot");

// Variável para armazenar o personagem selecionado
let personagemSelecionado = null;

// Array para armazenar personagens abaixados
const personagensAbaixados = [];

// Adiciona evento de clique a cada personagem
personagemSlots.forEach(slot => {
    slot.addEventListener("click", () => {
        // Remove a seleção anterior, se houver
        if (personagemSelecionado) {
            personagemSelecionado.classList.remove("selecionado");
        }
        
        // Define o novo personagem selecionado
        personagemSelecionado = slot;
        slot.classList.add("selecionado");
    });
});

// Função para abaixar (remover) o personagem selecionado
document.getElementById("abaixar-btn").addEventListener("click", () => {
    if (personagemSelecionado) {
        // Adiciona a classe de desaparecimento
        personagemSelecionado.classList.add("desaparecer");

        // Espera a duração da animação antes de esconder o card
        setTimeout(() => {
            personagemSelecionado.style.display = "none";
            personagensAbaixados.push(personagemSelecionado); // Adiciona à pilha de personagens abaixados
            personagemSelecionado = null; // Reseta o personagem selecionado
        }, 500); // 500ms para combinar com a duração da animação
    } else {
        alert("Selecione um personagem para abaixar.");
    }
});

// Função para retroceder a última ação
document.getElementById("retroceder-btn").addEventListener("click", () => {
    if (personagensAbaixados.length > 0) {
        // Pega o último personagem abaixado da pilha
        const ultimoPersonagemAbaixado = personagensAbaixados.pop();

        // Remove a classe de desaparecimento e mostra o personagem novamente
        ultimoPersonagemAbaixado.classList.remove("desaparecer");
        ultimoPersonagemAbaixado.style.display = "flex";
    } else {
        alert("Não há personagens para levantar.");
    }
});
