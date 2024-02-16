import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getPokemonDetails } from "../../services/getPokemonAPI"
import { GenerationFilterButton } from "../buttons/PokemonDetailButtons/GenerationFilterButtonForMovesTable/GenerationFilterButtonForMovesTable"
import { PokemonScreenButtons } from "../buttons/PokemonDetailButtons/PokemonScreenButtons/PokemonScreenButtons"
import { PokemonAbilities } from "./PokemonAbilities/PokemonAbilities"
import { PokemonDetailsImg } from "./PokemonImage/PokemonImage"
import { PokemonMoves } from "./PokemonMoves/PokemonMoves"
import { PokemonStats } from "./PokemonStats/PokemonStats"
import { PokemonTypes } from "./PokemonTypes/PokemonTypes"
import { size } from "../../data/variables"
import img from "../../assets/Background.png"
import styled from "styled-components"

export const PokemonDetails = () => {
    const [pokemonInfo, setPokemonInfo] = useState({})
    const [selectedGeneration, setSelectedGeneration] = useState('red-blue')
    const [pokemonImage, setPokemonImage] = useState('default')

    const { id } = useParams()

    useEffect(() => {
        const fetchDataDetails = async () => {
            const res = await getPokemonDetails(id);
            setPokemonInfo(res);
        };

        fetchDataDetails();
    }, [id]);
    
    return (
        <PokemonInfo>
            <PokemonDisplay>
                <Link to={'/'}><BackButton>Home</BackButton></Link>
                <PokemonJoao>
                    <PokemonScreen>
                        <PokemonDetailsImg pokemonInfo={pokemonInfo} pokemonImage={pokemonImage} />
                        <PokemonName>{pokemonInfo.name}</PokemonName>
                    </PokemonScreen>
                    <PokemonScreenButtons id={id} pokemonImage={pokemonImage} setPokemonImage={setPokemonImage} />    
                </PokemonJoao>
            </PokemonDisplay>
            <Jofe>
                <StatsScreen>
                    <PokemonStats pokemonInfo={pokemonInfo} />
                    <PokemonTypes pokemonInfo={pokemonInfo} />
                </StatsScreen>
                <GenerationFilterButton onButtonClick={setSelectedGeneration} />    
                <AttacksScreen>
                    <PokemonAbilities pokemonInfo={pokemonInfo} />
                    <PokemonMoves pokemonInfo={pokemonInfo} selectedGeneration={selectedGeneration} />
                </AttacksScreen>
            </Jofe>
        </PokemonInfo>
    )
}

const BackButton = styled.button`
    background: #4FD;
    position: absolute;
    top: 30px;
    left: 40px;
    width: 80px;
    height: 80px;
    border: solid 5px black;
    border-radius: 100px;
    font-size: 16px;
    font-family: 'PixeloidBold', sans-serif;
    cursor: pointer;

    &:hover {
        background-color: #008068;
    }
`

const PokemonJoao = styled.div`    
    background-image: url(${img});
    background-repeat: no-repeat;
    
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${size.mobileL}) {
        width: 700px;
        height: 700px;
        background-size: 24em;
    }

    @media (min-width: ${size.tablet}) {
        width: 700px;
        height: 700px;
        background-size: 28.5em;
    }

    @media (min-width: ${size.laptopL}) {
        width: 42em;
        height: 42em;
        background-size: 36.5em;
    }
`

const PokemonName = styled.div`
    @media (min-width: ${size.mobileL}) {
        font-size: 2em;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 3em;
    }
`

const PokemonScreen = styled.div`
    background: #C2D9AD;
    border-radius: 35px;
    border: solid black 3px;

    @media (min-width: ${size.mobileL}) {
        width: 325px;
        height: 325px;
        margin-top: 19.5%;
        margin-bottom: 6%;
    }

    @media (min-width: ${size.tablet}) {
        width: 370px;
        height: 370px;
        margin-top: 22%;
        margin-bottom: 9%;
    }

    @media (min-width: ${size.laptopL}) {
        width: 450px;
        height: 450px;
        margin-top: 13%;
        margin-bottom: 1%;
    }
`

const PokemonInfo = styled.section`
    width: 100vw;
    display: flex;
    
    @media (min-width: ${size.mobileL}) {
        height: 2000px;
        flex-direction: column;
        padding: 1em;
    }

    @media (min-width: ${size.laptopL}) {
        height: 100vh;
        flex-direction: row;
        padding: 2em;
    }
`

const PokemonDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: ${size.mobileL}) {
        width: 100%;
        height: 600px;
    }

    @media (min-width: ${size.tablet}) {
        width: 100%;
        height: 700px;
    }

    @media (min-width: ${size.laptopL}) {
        width: 50%;
        height: 100%;
    }
`

const StatsScreen = styled.div`
    background: #C2D9AD;
    border: solid black 3px;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: ${size.mobileL}) {
        width: 100%;
        height: 45%;
        gap: 1.7em;
    }

    @media (min-width: ${size.laptopL}) {
        width: 88%;
        height: 40%;
        gap: 0.5em;
    }
`

const AttacksScreen = styled.div`
    background: #C2D9AD;
    border: solid black 3px;
    border-radius: 35px 0 0 35px;
    text-align: center;

    @media (min-width: ${size.mobileL}) {
        width: 100%;
        height: 45%;
    }

    @media (min-width: ${size.laptopL}) {
        width: 88%;
        height: 40%;
    }
`

const Jofe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media (min-width: ${size.mobileL}) {
        width: 100%;
        height: 1300px;
    }

    @media (min-width: ${size.laptopL}) {
        width: 50%;
        height: 100%;
    }
`
