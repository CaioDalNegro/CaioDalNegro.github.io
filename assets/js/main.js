// Elemento alvo onde o texto será escrito
const target = document.querySelector("p");

// Textos para exibir, com tags HTML incluídas
const texts = [
  `Systems Analysis and Development <span class="highlight">student</span>`,
  `Java <span class="highlight">developer jr</span>`,
];

// Variáveis de controle
let index = 0; // Índice do caractere atual
let textIndex = 0; // Índice do texto atual no array

// Função para simular a digitação
function typeEffect() {
  // Texto atual
  const text = texts[textIndex];

  // Insere parte do texto com base no índice atual
  target.innerHTML = text.slice(0, index);

  // Incrementa o índice para mostrar o próximo caractere
  index++;

  // Condição para parar quando o texto completo for exibido
  if (index <= text.length) {
    setTimeout(typeEffect, 100); // Controle de velocidade da digitação (100ms por caractere)
  } else {
    // Pausa antes de apagar o texto e passar para o próximo
    setTimeout(() => {
      deleteEffect(); // Inicia a exclusão do texto
    }, 1000);
  }
}

// Função para simular a exclusão do texto
function deleteEffect() {
  // Texto atual
  const text = texts[textIndex];

  // Remove parte do texto com base no índice atual
  target.innerHTML = text.slice(0, index);

  // Decrementa o índice para remover o próximo caractere
  index--;

  // Condição para parar quando todo o texto for apagado
  if (index >= 0) {
    setTimeout(deleteEffect, 50); // Velocidade de exclusão (50ms por caractere)
  } else {
    // Passa para o próximo texto no array
    textIndex = (textIndex + 1) % texts.length; // Ciclo infinito
    setTimeout(typeEffect, 500); // Reinicia a digitação
  }
}

// Inicia o efeito ao carregar a página
window.onload = typeEffect;
