import { PokemonList } from "./PokemonList/PokemonList"
import { PokemonDisplayFooter } from "./PokemonDisplayFooter/PokemonDisplayFooter"
import img from "../../../assets/PokemonMapBackground.png"
import styled from "styled-components"
import { PokemonDisplayHeader } from "./PokemonDisplayHeader/PokemonDisplayHeader"

export const PokemonDisplay = () => {
    return (
        <PokemonDisplayContainer>
            <Display />
            <PokemonDisplayHeader />
            <PokemonList />
            <PokemonDisplayFooter />
        </PokemonDisplayContainer>
    )
}

const PokemonDisplayContainer = styled.div`
    position: relative;
    min-height: 100vh;
    padding-bottom: 350px;
`

const Display = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(5px);  
`