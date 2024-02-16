import styled from "styled-components";

export const LoadMoreButton = ({ limit, pokemonType, setOffset, setLoadedPokemons }) => {
    
    const loadMore = () => {
        console.log('Load more clicked');
        pokemonType === 'All'
            ? setOffset(prevOffset => prevOffset + limit)
            : setLoadedPokemons(prev => prev + limit);
    }

    return <Button onClick={loadMore}>Load More</Button>
}

const Button = styled.button`
    font-size: 25px;
    padding: 7px 70px;
    border-radius: 5px;
    border: 2px solid black;
    background: #A5CCC3;
    cursor: pointer;

    &:hover {
        background-color: #487F72;
    }
`