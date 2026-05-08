let i = 0;
const texte = "Designer web freelance et UI & Graphique designer";
const vitesse = 80;

function typeWriter() {
  const titre = document.getElementById("loko");
  if (!titre) return;

  if (i < texte.length) {
    titre.textContent += texte.charAt(i);
    i++;
    setTimeout(typeWriter, vitesse);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const titre = document.getElementById("loko");
  if (titre) titre.textContent = "";
  typeWriter();
});