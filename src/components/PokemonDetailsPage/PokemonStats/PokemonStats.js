import styled from "styled-components"
import { StatColors } from "./statColors"
import { size } from "../../../data/variables"

export const PokemonStats = ({ pokemonInfo }) => {
    return (
        <ul>
            {
                pokemonInfo.stats?.map((pokeStat, index) => (
                    <Stats>
                        <ContainerStats>
                            <Stat key={index}>{pokeStat.stat.name}:</Stat>
                            <BaseStat for={pokeStat.stat.name}>{pokeStat.base_stat}</BaseStat>
                        </ContainerStats>
                        <StatsBarContainer>
                            <ProgressBar name={pokeStat.stat.name} width={(pokeStat.base_stat / 100) * 100} />
                        </StatsBarContainer>
                    </Stats>
                ))
            }
        </ul>
    )
}

const ContainerStats = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${size.mobileL}) {
        width: 80%;
    }

    @media (min-width: ${size.laptopL}) {
        width: 40%;
    }
`

const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media (min-width: ${size.mobileL}) {
        padding: 5px 15px;
        flex-direction: column;
    }

    @media (min-width: ${size.laptopL}) {
        padding: 5px 20px;
        flex-direction: row;
    }
`

const BaseStat = styled.label`
    font-size: 25px;
    font-family: 'PixeloidBold', sans-serif;
`
    
const Stat = styled.li`
    width: 92%;
    text-align: left;

    @media (min-width: ${size.mobileL}) {
        font-size: 24px;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 20px;
    }
`

const StatsBarContainer = styled.div`
    background: #C2D9AD;
    outline: 3px solid black;

    @media (min-width: ${size.mobileL}) {
        width: 90%;
    }

    @media (min-width: ${size.laptopL}) {
        width: 58%;
    }
`
    
const ProgressBar = styled.div`
    width: ${(props) => props.width}%;
    background-color: ${(props) => StatColors(props.name)};
    padding: 15px;
    transition: width 0.3s ease-in-out;
`