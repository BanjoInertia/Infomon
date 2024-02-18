import styled from "styled-components"
import { size } from "../../../../../data/variables"

export const ChangePokemonImageButton = ({ pokemonImage, setPokemonImage }) => {
    const ChangePokemonImage = () => {
        pokemonImage === 'default'
            ? setPokemonImage('shiny')
            : setPokemonImage('default')
    }

    return (
        <ContainerButton data-testid="change-poke-image-button">
            <Label>Shiny</Label>
            <ChangeImageButton onClick={ChangePokemonImage} />
        </ContainerButton>
    )
}

const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: ${size.mobileL}) {
        padding-left: 10px;
    }

    @media (min-width: ${size.laptopL}) {
        padding-left: 40px;
    }
`

const Label = styled.label`
    font-family: 'PixeloidBold', sans-serif;
`

const ChangeImageButton = styled.button`
    width: 10em;
    height: 2.5em;
    border: 2px solid black;
    border-radius: 40px;
    background: #3B88CA;
    cursor: pointer;

    &:hover {
        background-color: #1c405f;
    }
`