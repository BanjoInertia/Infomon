import styled from "styled-components"
import { TypeColors } from "./typeColors"
import { size } from "../../../data/variables"

export const PokemonTypes = ({ pokemonInfo }) => {
    return (
        <Types data-testid="pokemon-types">
            {
                pokemonInfo.types?.map((type, index) => (
                    <Type key={index} name={type.type.name}>{type.type.name}</Type>
                ))
            }
        </Types>
    )
}

const Types = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1em;
`

const Type = styled.li`
    background-color: ${(props) => TypeColors(props.name)};
    border: solid rgba(0,0,0,0.4) 5px;
    font-family: 'PixeloidBold', sans-serif;
    display: flex;
    align-items: center; 
    justify-content: center;

    @media (min-width: ${size.mobileL}) {
        height: 2em;
        width: 5em;
        font-size: 1.6em;
    }

    @media (min-width: ${size.tablet}) {
        height: 2em;
        width: 6em;
        font-size: 2em;
    }

    @media (min-width: ${size.laptopL}) {
        height: 1.7em;
        width: 6em;
        font-size: 2em;
    }
`