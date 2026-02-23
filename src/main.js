// main.js — Lógica principal de la aplicación

import { fetchPokemon } from "./services/api.js";
import { showPokemon, closeModal } from "./ui/ui.js";

let current = 1; 

async function loadPokemon(id) {
  const pokemon = await fetchPokemon(id);
  showPokemon(pokemon);
}
// El navegador requiere una interacción antes de reproducir audio
// Este código espera el primer clic del usuario para iniciar la música
const music = document.getElementById("bg-music");
music.volume = 0.4; // Volumen al 40%

document.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true }); // { once: true } = solo se ejecuta la primera vez

// Carga inicial
loadPokemon(current);

// Botón Siguiente
document.querySelector(".next").addEventListener("click", () => {
  current++;
  loadPokemon(current);
});

// Botón Anterior
document.querySelector(".prev").addEventListener("click", () => {
  if (current > 1) current--;
  loadPokemon(current);
});

// Cerrar modal
document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("modal-overlay").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});