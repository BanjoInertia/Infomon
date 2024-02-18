import { useState } from "react";
import { LoadMoreButton } from "../../../buttons/PokemonHomeButtons/LoadMoreButton/LoadMoreButton";
import { PokemonSearchBar } from "./pokemonListFilters/ListPokemonSearchBar/ListPokemonSearchBar";
import { TypeFilterButton } from "./pokemonListFilters/ListTypeFilterButton/ListTypeFilterButton";
import { FilteredPokemonByName } from "./pokemonListFilters/ListFilteredPokemonByName/ListFilteredPokemonByName";
import { PokemonSetter } from "./PokemonListSetter/PokemonSetter";
import styled from "styled-components";
import { colors, size } from "../../../../data/variables";

export const PokemonList = () => {
    const [pokemonType, setPokemonType] = useState('All');
    const [offset, setOffset] = useState(0);
    const [loadedPokemons, setLoadedPokemons] = useState(0);
    const [searchedPokemon, setSearchedPokemon] = useState("")
    const limit = 10;

    return (
        <>
            <Filters>
                <PokemonSearchBar setSearchedPokemon={setSearchedPokemon} searchedPokemon={searchedPokemon} />
                <TypeFilterButton onChange={setPokemonType} onTypeChange={() => {setLoadedPokemons(0); setOffset(0)}}/>
            </Filters>
            
            <FilteredPokemonByName searchedPokemon={searchedPokemon} />

            {!searchedPokemon && (
                <ContainerLista>
                    <PokemonSetter offset={offset} loadedPokemons={loadedPokemons} pokemonType={pokemonType} limit={limit} />
                    <LoadMoreButton limit={limit} pokemonType={pokemonType} setOffset={setOffset} setLoadedPokemons={setLoadedPokemons} />
                </ContainerLista>  
            )}     
        </>
    );
};

const Filters = styled.div`
    background: ${colors.primaryBlue};
    padding: 10px;
    margin: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;

    @media (min-width: ${size.mobileL}) {
        flex-direction: column;
    }

    @media (min-width: ${size.laptopL}) {
        flex-direction: row;
    }
`

const ContainerLista = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin: 0 11%;
    background: ${colors.primaryBlue};
    border-radius: 25px;
    padding: 20px 0;
`