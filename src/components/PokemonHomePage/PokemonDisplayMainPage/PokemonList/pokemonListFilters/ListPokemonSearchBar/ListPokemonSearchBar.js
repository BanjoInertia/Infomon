import styled from "styled-components"
import { colors, size } from "../../../../../../data/variables";

export const PokemonSearchBar = ({ setSearchedPokemon }) => {
    let HandleSearchedPokemon = (event) => {
        let lowerCase = event.target.value.toLowerCase();
        setSearchedPokemon(lowerCase);
    }

    return (
        <SearchBar
            data-testid="pokemon-search-bar"
            size={50}
            type="text"
            id="searchPoke"
            name="searchPoke"
            autoComplete="off"
            onChange={HandleSearchedPokemon}
            placeholder="Search for a pokemon"
        />
    )
}

const SearchBar = styled.input`
    font-size: 25px;
    padding: 5px;
    border: none;
    background-color: ${colors.primaryGreen};
    color: black;
    border: solid black 2px;
    &::placeholder {
        color: grey;
    }

    @media (min-width: ${size.mobileL}) {
        width: 90%;
        margin-bottom: 15px;
    }

    @media (min-width: ${size.laptopL}) {
        width: 35%;
        margin-bottom: 0;
    }
`