// ui.js — Lógica de visualización

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function showPokemon(pokemon) {
  if (!pokemon) return;

  document.getElementById("pokemon-img").src = pokemon.sprite;
  document.getElementById("pokemon-name").textContent = capitalize(pokemon.name);
  document.getElementById("pokemon-id").textContent =
    "#" + pokemon.id.toString().padStart(3, "0");

  const typesDiv = document.querySelector(".types");
  typesDiv.innerHTML = "";

  pokemon.types.forEach(t => {
    const span = document.createElement("span");
    span.classList.add("type", t);
    span.textContent = capitalize(t);
    typesDiv.appendChild(span);
  });

  document.getElementById("pokemon-img").onclick = () => showModal(pokemon);
}

export function showModal(pokemon) {
  if (!pokemon) return;

  document.getElementById("modal-name").textContent    = capitalize(pokemon.name);
  document.getElementById("modal-img").src             = pokemon.sprite;
  document.getElementById("modal-id").textContent      = "#" + pokemon.id.toString().padStart(3, "0");
  document.getElementById("modal-height").textContent  = pokemon.height;
  document.getElementById("modal-weight").textContent  = pokemon.weight;
  document.getElementById("modal-abilities").textContent =
    pokemon.abilities.map(capitalize).join(", ");

  const statsDiv = document.getElementById("modal-stats");
  statsDiv.innerHTML = "<h3>Estadísticas</h3>";

  pokemon.stats.forEach(s => {
    const percent = Math.min((s.base / 255) * 100, 100).toFixed(1);
    const row = document.createElement("div");
    row.classList.add("stat-row");
    row.innerHTML = `
      <span>${capitalize(s.stat.replace("-", " "))}</span>
      <div class="stat-bar-bg">
        <div class="stat-bar-fill" style="width: ${percent}%"></div>
      </div>
      <span class="stat-value">${s.base}</span>
    `;
    statsDiv.appendChild(row);
  });

  document.getElementById("pokemon-modal").classList.remove("hidden");
  document.getElementById("modal-overlay").classList.remove("hidden");
}

export function closeModal() {
  document.getElementById("pokemon-modal").classList.add("hidden");
  document.getElementById("modal-overlay").classList.add("hidden");
}