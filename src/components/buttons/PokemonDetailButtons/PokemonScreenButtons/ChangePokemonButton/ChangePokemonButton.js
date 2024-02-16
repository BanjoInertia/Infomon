import { Link } from "react-router-dom"
import styled from "styled-components"
import { size } from "../../../../../data/variables"

export const ChangePokemonButton = ({ id, position }) => {
    return (
        <Button>
            <Label>{position}</Label>
            <Link to={`/details/${id}`}><ChangeButton /></Link>
        </Button>
    )
}

const Button = styled.div`
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    font-family: 'PixeloidBold', sans-serif;
`

const ChangeButton = styled.button`
    width: 8em;
    height: 2em;
    border: 2px solid black;
    border-radius: 40px;
    background: #7C7C7C;
    cursor: pointer;

    &:hover {
        background-color: #4a4a4a;
    }
`