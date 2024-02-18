import styled from "styled-components"
import { size } from "../../../../data/variables"

export const PokemonDisplayHeader = () => {
    return (
        <Header data-testid="pokemon-header">Welcome to Infomon</Header>
    )
}

const Header = styled.section`
    background: linear-gradient(180deg, rgba(104,161,215,1) 0%, rgba(104,161,215,1) 57%, rgba(58,96,133,1) 100%);
    color: white;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 3px;
    padding: 20px;
    font-family: 'PixeloidBold', sans-serif;

    @media (min-width: ${size.mobileL}) {
        font-size: 50px;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 70px;
    }
`