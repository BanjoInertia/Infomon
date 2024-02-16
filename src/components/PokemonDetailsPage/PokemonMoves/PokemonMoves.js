import { useState, useEffect } from "react";
import { RenderPokemonMoveTable } from "../PokemonMovesTable/PokemonMovesTable";
import styled from "styled-components";

export const PokemonMoves = ({ pokemonInfo, selectedGeneration }) => {
    const [pokemonMovesInfo, setPokemonMovesInfo] = useState([])

    useEffect(() => {
        const fetchDataMoves = async () => {
            if (pokemonInfo.moves && pokemonInfo.moves.length > 0) {
                const movesArray = [];
                
                for (const move of pokemonInfo.moves) {  
                    for (const method of move.version_group_details) {
                        if (
                            ( method.move_learn_method.name === 'level-up' ||
                              method.move_learn_method.name === 'machine' ||
                              method.move_learn_method.name === 'tutor') &&
                              method.version_group.name === selectedGeneration
                        ) {
                            const res = await fetch(move.move.url);
                            const data = await res.json();
                            movesArray.push(data);
                        }
                    }  
                }
                setPokemonMovesInfo(movesArray);
            }
        };
        fetchDataMoves();
    }, [pokemonInfo.moves, selectedGeneration]);

    console.log(pokemonMovesInfo)
    console.log(pokemonInfo.moves)

    return (
        <div>
            <TitleMoves>Moves</TitleMoves>
            {['level-up', 'machine', 'tutor'].map((learnMethod) => (
                <RenderPokemonMoveTable
                    key={learnMethod}
                    learnMethod={learnMethod}
                    pokeInfo={pokemonInfo.moves}
                    selectedGeneration={selectedGeneration}
                    pokemonMovesInfo={pokemonMovesInfo}
                />
            ))}
        </div>
    )
}

const TitleMoves = styled.h1`
    color: white;
    padding: 5px;
    font-size: 45px;
    font-family: 'PixeloidBold', sans-serif;
    background: #7E936A;
    border-bottom: 3px black solid;
`