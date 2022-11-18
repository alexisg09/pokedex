export async function fetchPokemons() {
  const res = await fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Psy");
  return res.json();
}
