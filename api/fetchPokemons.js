export async function fetchPokemons() {
  const res = await fetch('https://pokebuildapi.fr/api/v1/pokemon/generation/4');
  return res.json();
}
