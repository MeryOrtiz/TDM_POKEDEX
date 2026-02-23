// main.js — Lógica principal de la aplicación

import { fetchPokemon } from "./services/api.js";
import { showPokemon, closeModal } from "./ui/ui.js";

let current = 25; // Pikachu por defecto

async function loadPokemon(id) {
  const pokemon = await fetchPokemon(id);
  showPokemon(pokemon);
}

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