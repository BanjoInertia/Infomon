import styled from "styled-components"
import { size } from "../../../../data/variables"

export const PokemonDisplayHeader = () => {
    return (
        <Header>Pokemons</Header>
    )
}

const Header = styled.section`
    background: linear-gradient(180deg, rgba(104,161,215,1) 0%, rgba(104,161,215,1) 57%, rgba(58,96,133,1) 100%);
    
    padding: 20px;
    font-family: 'PixeloidBold', sans-serif;

    @media (min-width: ${size.mobileL}) {
        font-size: 50px;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 70px;
    }
`