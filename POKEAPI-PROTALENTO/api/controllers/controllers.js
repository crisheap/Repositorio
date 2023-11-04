export async function buscarPokemon(url) {

  let data = await fetch(url || `https://pokeapi.co/api/v2/pokemon/?limit=21`);
  let dataParseada = await data.json();
  //console.log(dataParseada.results);

  // return dataParseada.results;
  let arrayDePokemones = [];

  for (let i = 0; i < dataParseada.results.length; i++) {
    const pokemon = dataParseada.results[i];

    //console.log("i=", i)
    //console.log("Pokemon que estamos iterando: ", pokemon.url);
    let pokemonData = await fetch(pokemon.url);
    let pokemonParseado = await pokemonData.json();

    //console.log(pokemonParseado)

    let pokemonFormateado = {
      id: pokemonParseado.id,
      nombre: pokemonParseado.name,
      tipos: pokemonParseado.types,
      imagen: pokemonParseado.sprites.other.dream_world.front_default,
    };

    arrayDePokemones.push(pokemonFormateado);
    //console.log(pokemonFormateado);
  }

  return {
    previous: dataParseada.previous,
    next: dataParseada.next,
    arrayDePokemones: arrayDePokemones,
  };

  arrayDePokemones;
}

export async function buscarPokemonPorNombre(nombre) {
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
  let pokemonParseado = await data.json();

  let pokemonFormateado = {
    id: pokemonParseado.id,
    nombre: pokemonParseado.name,
    tipo: pokemonParseado.types,
    imagen: pokemonParseado.sprites.other.dream_world.front_default,
  };

  return pokemonFormateado;
}

export async function paginaAnterior() {}
export async function paginaSiguiente() {}
