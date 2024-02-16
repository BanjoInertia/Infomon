export async function getPokemonAPI(limit, offset) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
    const pokemons = await response.json()
    return pokemons.results
}

export async function getPokemonDetails(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return await response.json()
}

export async function getPokemonAbilities(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/ability/${id}/`)
    return await response.json()
}

export async function getPokemonGenerations() {
    const response = await fetch(`https://pokeapi.co/api/v2/version-group/`)
    return await response.json()
}

export async function getPokemonTypes() {
    const response = await fetch(`https://pokeapi.co/api/v2/type/`)
    const types = await response.json()
    return types.results
}

export async function getTypeFilteredPokemons(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${id}/`)
    const jofe = await response.json()
    return jofe.pokemon
}