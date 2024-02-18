import { useEffect, useState } from "react"
import { getPokemonAPI } from "../../../../../../services/getPokemonAPI"
import { PokemonListItem } from "../../PokemonListItem/PokemonListItem";
import { extractId } from "../../../../../PokemonExtractId/extractId";
import styled from "styled-components";
import { colors } from "../../../../../../data/variables";

export const FilteredPokemonByName = ({ searchedPokemon }) => {
    const [filteredPokemonData, setFilteredPokemonData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemonAPI(100000, 0)
            setFilteredPokemonData(data.map(pokemon => ({ id: extractId(pokemon.url), name: pokemon.name })))
        }

        fetchData()
    }, [])
    
    const filteredData = filteredPokemonData.filter((el) => {
        if (searchedPokemon === '') {
            return null;
        } else {
            return el.name.toLowerCase().includes(searchedPokemon.toLowerCase());
        }
    })

    const showContainer = searchedPokemon !== '' || filteredData.length > 0;

    return (
        showContainer && (
            <ContainerSearchBar data-testid="filtered-pokemon">
                {searchedPokemon && filteredData.length === 0 ? (
                    <h2>Pokemon not found, please enter a valid name.</h2>
                ) : (
                    <SearchedPokemonList>
                        {filteredData.map((item) => (
                            <PokemonListItem key={item.id} id={item.id} name={item.name} />
                        ))}
                    </SearchedPokemonList>
                )}
            </ContainerSearchBar>
        )
    )
}

const ContainerSearchBar = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin: 0 11%;
    background: ${colors.primaryBlue};
    border-radius: 25px;
    padding: 20px 0;
    margin-bottom: 50px;
`

const SearchedPokemonList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: auto;
`
