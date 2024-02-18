import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PokemonListItem } from "../PokemonListItem";

describe('PokemonListItem', () => {
    it('should render the pokemon list item on the screen', async () => {
        const pokemonInfo = { id: 25, name: "Pikachu" };
        
        render(
            <MemoryRouter>
                <PokemonListItem pokemonInfo={pokemonInfo}/>
            </MemoryRouter>
        );

        expect(screen.getByTestId('pokemon-list-item')).toBeVisible();
    });
});