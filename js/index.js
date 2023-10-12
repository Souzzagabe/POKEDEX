const pokemonName = document.querySelector(".pokemon-name")

const fetchPokemon = async (pokemon) => {
    const APIResnponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIResnponse.json()
    return data
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon)

    pokemonName.innerHTML = data.name
}

renderPokemon("23")