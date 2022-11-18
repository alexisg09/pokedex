export async function fetchPokemons() {
  const res = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/30");
  return res.json();
}
