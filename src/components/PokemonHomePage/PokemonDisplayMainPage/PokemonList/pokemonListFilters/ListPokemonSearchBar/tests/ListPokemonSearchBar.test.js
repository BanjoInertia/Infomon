import { render, screen } from "@testing-library/react";
import { PokemonSearchBar } from "../ListPokemonSearchBar";

describe('ListPokemonSearchBar', () => {
    it('should render the search bar on the screen', async () => {
        render(<PokemonSearchBar />);

        expect(screen.getByTestId('pokemon-search-bar')).toBeVisible();
    });
});