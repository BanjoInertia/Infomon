import { useEffect, useState } from "react";
import styled from "styled-components";
import { size } from "../../../data/variables";

export const PokemonAbilities = ({ pokemonInfo }) => {
    const [pokemonAbilitiesInfo, setPokemonAbilitiesInfo] = useState([]);

    useEffect(() => {
        const fetchDataAbilities = async () => {
            if (pokemonInfo.abilities && pokemonInfo.abilities.length > 0) {
                const abilitiesArray = [];
                await Promise.all(pokemonInfo.abilities.map(async (ability) => {
                    const res = await fetch(ability.ability.url);
                    const data = await res.json();
                    abilitiesArray.push(data);
                }));
                setPokemonAbilitiesInfo(abilitiesArray);
            }
        };
        fetchDataAbilities();
    }, [pokemonInfo.abilities]);

    return (
        <>
            <TitleAbilities>Abilities</TitleAbilities>
            <ContainerAbilities>
                {pokemonAbilitiesInfo.map((ability, index) => (
                    <li key={index}>
                        <AbilityName>{ability.name}</AbilityName>
                        <AbilityDescription>
                            {ability.effect_entries
                                .filter((en) => en.language.name === "en")
                                .map((en) => en.short_effect)}
                        </AbilityDescription>
                    </li>
                ))}
            </ContainerAbilities>
        </>
    );
};

const ContainerAbilities = styled.ul`
    display: grid;
    grid-template-columns: 50% 50%;
    padding-bottom: 20px;
`

const TitleAbilities = styled.h1`
    color: white;
    padding: 5px;
    font-size: 45px;
    font-family: 'PixeloidBold', sans-serif;
    background: #7E936A;
`

const AbilityName = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #96AC81;
    padding: 2px;
    border: solid black 3px;

    @media (min-width: ${size.mobileL}) {
        font-size: 25px;
        height: 90px;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 35px;
        height: 70px;
    }
`

const AbilityDescription = styled.p`
    font-size: 20px;
    padding: 10px 10px;
    border: solid black 3px;
    border-top: none;

    @media (min-width: ${size.mobileL}) {
        height: 230px;
    }

    @media (min-width: ${size.laptopL}) {
        height: 120px;
    }
`