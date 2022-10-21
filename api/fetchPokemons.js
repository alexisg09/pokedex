export async function fetchPokemons() {
    const res = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100");
    return res.json();
};


