import { useState, useEffect } from "react";
import { getPokemonAPI, getTypeFilteredPokemons } from "../../../../../services/getPokemonAPI";
import { PokemonListItem } from "../PokemonListItem/PokemonListItem";
import { extractId } from "../../../../PokemonExtractId/extractId";
import styled from "styled-components";

export const PokemonSetter = ({ offset, loadedPokemons, pokemonType, limit, searchedPokemon }) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (pokemonType === 'All') {
                    const data = await getPokemonAPI(limit, offset);
                    const pokemonArray = data;

                    setPokemon((prevPokemons) => (
                        offset === 0
                            ? pokemonArray.map(pokemon => ({ id: extractId(pokemon.url), name: pokemon.name }))
                            : [...prevPokemons, ...pokemonArray.map(pokemon => ({ id: extractId(pokemon.url), name: pokemon.name }))]
                    ));
                } else {
                    const typePokemons = await getTypeFilteredPokemons(pokemonType);
                    const limitedTypePokemons = typePokemons.slice(loadedPokemons, loadedPokemons + limit);

                    setPokemon((prevPokemons) => (
                        loadedPokemons === 0
                            ? limitedTypePokemons.map(pokemon => ({ id: extractId(pokemon.pokemon.url), name: pokemon.pokemon.name }))
                            : [...prevPokemons, ...limitedTypePokemons.map(pokemon => ({ id: extractId(pokemon.pokemon.url), name: pokemon.pokemon.name }))]
                    ));
                }
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            }
        };

        fetchData();
    }, [limit, offset, pokemonType, loadedPokemons]);

    return (
        <>
            <ListaPokemon data-testid="pokemon-setter">
                {pokemon.map((poke, index) => (
                    <PokemonListItem key={index} id={poke.id} name={poke.name} />
                ))}
            </ListaPokemon>
        </>
    );
};

const ListaPokemon = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: auto;
`