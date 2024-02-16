import { Link } from "react-router-dom"
import styled from "styled-components"

export const PokemonListItem = ({ id, name }) => {
    return (
        <Link to={`/details/${id}`}>
            <PokemonCard>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt='foto' />
                <PokemonName>{name}</PokemonName>
            </PokemonCard>
        </Link>
    )
}

const PokemonCard = styled.li`
    height: 293px;
    width: 252px;
    background: linear-gradient(180deg, rgba(213,238,189,1) 0%, rgba(213,238,189,1) 64%, rgba(129,152,109,1) 100%);
    border-radius: 20px;
    border: solid black 2px;
    margin: 13px;
    overflow: hidden;
`

const Image = styled.img`
    width: 15.5em;
    image-rendering: pixelated; 
`

const PokemonName = styled.p`
    font-size: 30px;
    color: black;

`