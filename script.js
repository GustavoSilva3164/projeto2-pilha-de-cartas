const deck = [];
let option = "0";

while (option !== "3") {
  alert(`Cartas no baralho: ${deck.length}\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair`);

  option = prompt("Escolha uma opção (1-3):");

  if (option === "1") {
    const cardName = prompt("Digite o nome da carta que deseja adicionar:");
    if (cardName) {
      deck.push(cardName);
      alert(`Carta "${cardName}" adicionada ao topo do baralho.`);
    }
  } else if (option === "2") {
    if (deck.length === 0) {
      alert("Não tem nenhuma carta no baralho para puxar.");
    } else {
      const pulledCard = deck.pop();
      alert(`Você puxou a carta: "${pulledCard}".`);
    }
  } else if (option === "3") {
    alert("Você parou o funcionamento do programa");
  } else {
    alert("Opção não existente, Tente novamente(digite um numero entre 1-3).");
  }
}
