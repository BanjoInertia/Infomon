import styled from "styled-components"
import { size } from "../../../data/variables"

export const PokemonDetailsImg = ({ pokemonInfo, pokemonImage }) => {
    let image = ''

    if (pokemonImage === 'default') {
        image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`
    } else if (pokemonImage === 'shiny') {
        image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemonInfo.id}.png`
    }

    return (
        <Img src={image} alt={`${pokemonInfo.name}`}/>
    )
}

const Img = styled.img`
    @media (min-width: ${size.mobileL}) {
        width: 16em;
    }

    @media (min-width: ${size.tablet}) {
        width: 19em;
    }

    @media (min-width: ${size.laptopL}) {
        width: 23em;
    }
`