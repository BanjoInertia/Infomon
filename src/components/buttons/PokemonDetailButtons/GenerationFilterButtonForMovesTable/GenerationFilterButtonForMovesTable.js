import { useEffect, useState } from "react"
import { getPokemonGenerations } from "../../../../services/getPokemonAPI"
import styled from "styled-components"
import { colors, size } from "../../../../data/variables"

export const GenerationFilterButtonForMovesTable = ({ onButtonClick }) => {
    const [generations, setGenerations] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPokemonGenerations()
            setGenerations(res.results)
        }

        fetchData()
    }, [])

    console.log(generations)

    return (
        <ContainerGenerationFilterButton data-testid="generation-button">
            <TitleGenerationFilterButton>Moves Filter:</TitleGenerationFilterButton>
            <Select onChange={(event) => onButtonClick(event.target.value)}>
                {generations.map((gen, index) => (
                    <option key={index} value={gen.name}>{gen.name}</option>
                ))}
            </Select>
        </ContainerGenerationFilterButton>
    )
}

const ContainerGenerationFilterButton = styled.div`
    width: 80%;
    height: 5%;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
`

const TitleGenerationFilterButton = styled.h2`
    color: white;
    font-size: 25px;        
    font-family: 'PixeloidBold', sans-serif;
`

const Select = styled.select`
    background: ${colors.primaryGreen};
    font-size: 20px;
    border: solid black 2px;
    cursor: pointer;

    @media (min-width: ${size.mobileL}) {
        width: 200px;
        height: 70%;
    }

    @media (min-width: ${size.laptopL}) {
        width: 40%;
        height: 100%;
    }
`