import {
  buscarPokemon,
  buscarPokemonPorNombre,
} from "./controllers/controllers.js";

let root = document.getElementById("root");

let previousUrl = ""
let nextUrl = ""
async function mostrarPokemones(url) {

    let objetoPokemon = await buscarPokemon(url);
 // let objetoPokemon = await buscarPokemon(url);
  console.log("Estoy dentro de la funcón ejemplo", objetoPokemon.arrayDePokemones);

    previousUrl = objetoPokemon.previous;
    nextUrl = objetoPokemon.next;


  let html = "";

  objetoPokemon.arrayDePokemones.forEach((pokemon) => {
    let cardPokemon = `<div class="card">
                                <span>${pokemon.nombre}</span>
                                <span>${pokemon.id}</span>
                                <span>${pokemon.tipos[0].type.name}</span>
                                <img class="card-image" src='${pokemon.imagen}'/>
                            </div>`;
    html += cardPokemon;
  });

  root.innerHTML = html;
}

mostrarPokemones();

let botonDeBusqueda = document.getElementById("buscar-pokemon");
let barraDeBusqueda = document.getElementById("barra-pokemon");

botonDeBusqueda.addEventListener("click", async function (event) {
  event.preventDefault();
  let pokemonBuscado = await buscarPokemonPorNombre(barraDeBusqueda.value);
  let cardPokemon = `<div class="card">
                                <span>${pokemonBuscado.nombre}</span>
                                <span>${pokemonBuscado.id}</span>
                                <span>${pokemonBuscado.tipo[0].type.name}</span>
                                <img class="card-image" src='${pokemonBuscado.imagen}'/>
                            </div>`;

  root.innerHTML = cardPokemon;
});

buscarPokemonPorNombre();

let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");

previousBtn.addEventListener("click", async () => {
    mostrarPokemones(previousUrl)
});

nextBtn.addEventListener("click", async () => {
    mostrarPokemones(nextUrl)
});
