export async function fetchPokemons() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    return res.json();
};

