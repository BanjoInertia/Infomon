import styled from "styled-components";
import { colors } from "../../../../data/variables";

export const LoadMoreButton = ({ limit, pokemonType, setOffset, setLoadedPokemons }) => {
    
    const loadMore = () => {
        console.log('Load more clicked');
        pokemonType === 'All'
            ? setOffset(prevOffset => prevOffset + limit)
            : setLoadedPokemons(prev => prev + limit);
    }

    return <Button data-testid="load-more-button" onClick={loadMore}>Load More</Button>
}

const Button = styled.button`
    font-size: 25px;
    padding: 7px 70px;
    border-radius: 5px;
    border: 2px solid black;
    background: ${colors.secondaryGreen};
    cursor: pointer;

    &:hover {
        filter: brightness(70%);
        color: white;
    }
`