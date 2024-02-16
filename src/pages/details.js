import { PokemonDetails } from "../components/PokemonDetailsPage/PokemonDetails"
import img from '../assets/BackgroundDetails.png'
import styled from "styled-components"

export const Details = () => {
    return (
        <Background>
            <PokemonDetails />
        </Background>
    )
} 

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`