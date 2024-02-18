import { ChangePokemonButton } from "./ChangePokemonButton/ChangePokemonButton";
import { ChangePokemonImageButton } from "./ChangePokemonImageButton/ChangePokemonImageButton";
import styled from "styled-components"
import { size } from "../../../../data/variables";

export const PokemonVisualizerButtons = ({ id, pokemonImage, setPokemonImage }) => {
    const pokemonId = parseInt(id);

    const previousId = pokemonId - 1;
    const nextId = pokemonId + 1;

    return (
        <Buttons>
            <ChangePokemonButton id={previousId} position={'Previous'} />
            <ChangePokemonButton id={nextId} position={'Next'} />
            <ChangePokemonImageButton pokemonImage={pokemonImage} setPokemonImage={setPokemonImage} />
        </Buttons>
    )
}

const Buttons = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    gap: 10px;

    @media (min-width: ${size.mobileL}) {
        color: white;
    }

    @media (min-width: ${size.laptopL}) {
        color: black;
    }
`