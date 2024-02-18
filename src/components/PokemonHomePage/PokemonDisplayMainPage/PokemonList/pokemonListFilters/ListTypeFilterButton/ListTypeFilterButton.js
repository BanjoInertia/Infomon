import { useEffect, useState } from "react";
import { getPokemonTypes } from "../../../../../../services/getPokemonAPI";
import styled from "styled-components";
import { TypeColors } from "../../../../../PokemonDetailsPage/PokemonTypes/typeColors";
import { colors, size } from "../../../../../../data/variables";

export const TypeFilterButton = ({ onChange, onTypeChange }) => {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('All');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemonTypes()
            setTypes(data)
        }

        fetchData()
    }, [])

    const handleTypeChange = (selectedType) => {
        setSelectedType(selectedType);
        onChange(selectedType);
        onTypeChange();
    };

    const resetFilter = () => {
        setSelectedType('All');
        onChange('All');
        onTypeChange();
    };

    return (
        <TypeFilters data-testid="type-filter-button">
            <Select value={selectedType} onChange={(event) => handleTypeChange(event.target.value)}>
                <Option value={'All'}>All</Option>
                {types.slice(0, types.length - 2).map((type, index) => (
                    <Option key={index} name={type.name}>{type.name}</Option>
                ))}
            </Select>
            <ResetFilterButton onClick={resetFilter}>Reset Filter</ResetFilterButton>
        </TypeFilters>
    );
};

const TypeFilters = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    gap: 20px;
`

const Select = styled.select`
    background: ${colors.primaryGreen};
    font-size: 30px;
    border: solid black 2px;
    cursor: pointer;

    @media (min-width: ${size.mobileL}) {
        width: 40%;
    }

    @media (min-width: ${size.laptopL}) {
        width: 50%;
    }
`

const Option = styled.option`
    background-color: ${(props) => TypeColors(props.name)};
    font-size: 25px;
`

const ResetFilterButton = styled.button`
    border: 2px solid black;
    background: #A5CCC3;
    cursor: pointer;

    &:hover {
        background-color: #487F72;
    }

    @media (min-width: ${size.mobileL}) {
        width: 40%;
        font-size: 23px;
    }

    @media (min-width: ${size.laptopL}) {
        width: 50%;
        font-size: 25px;
    }
`