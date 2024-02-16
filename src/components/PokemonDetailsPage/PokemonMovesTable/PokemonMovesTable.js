import styled from "styled-components"
import { size } from "../../../data/variables"

export const RenderPokemonMoveTable = ({learnMethod, pokeInfo, selectedGeneration, pokemonMovesInfo}) => {
    return (
        <>
            <LearnMethodTitle>{learnMethod}</LearnMethodTitle> 
            <Table>
                <thead>
                    <tr>
                        <MovesTableHeaders>Lv.</MovesTableHeaders>
                        <MovesTableHeaders>Move</MovesTableHeaders>
                        <MovesTableHeaders>Type</MovesTableHeaders>
                        <MovesTableHeaders>Cat.</MovesTableHeaders>
                        <MovesTableHeaders>Power</MovesTableHeaders>
                        <MovesTableHeaders>Acc.</MovesTableHeaders>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokeInfo?.map((move) => (
                            move.version_group_details?.map((method, index) => {
                                if (method.move_learn_method.name === learnMethod && method.version_group.name === selectedGeneration) {
                                    const details = pokemonMovesInfo.find(detail => detail.name === move.move.name) 
                                    return (
                                        <MovesTableRows key={index}>
                                            <MovesTableData>{method.level_learned_at}</MovesTableData>
                                            <MovesTableData>{details?.name}</MovesTableData>
                                            <MovesTableData>{details?.type?.name}</MovesTableData>
                                            <MovesTableData>{details?.damage_class?.name}</MovesTableData>
                                            <MovesTableData>{details?.power}</MovesTableData>
                                            <MovesTableData>{details?.accuracy}</MovesTableData>
                                        </MovesTableRows>
                                    )
                                }
                            })
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

const LearnMethodTitle = styled.h1`
    font-family: 'PixeloidBold', sans-serif;
    background-color: #7E936A;
    font-size: 30px;
    padding: 5px 0;
`

const Table = styled.table`
    width: 100%;
    margin: 1px;
    border-collapse: collapse;
    border-bottom: solid #7E936A 2px;
`

const MovesTableHeaders = styled.th`
    background-color: #96AC81;
    border-bottom: solid #7E936A 2px;
    border-right: solid #7E936A 2px;

    @media (min-width: ${size.mobileL}) {
        padding: 12px 0;
    }

    @media (min-width: ${size.laptopL}) {
        padding: 12px 0;
    }
`

const MovesTableRows = styled.tr`
    background-color: #C2D9AD;
    &:nth-child(even){background-color: #A6BB93;}
`

const MovesTableData = styled.td`
    border-right: solid #7E936A 2px;
    
    @media (min-width: ${size.mobileL}) {
        font-size: 18px;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 20px;
    }
`
