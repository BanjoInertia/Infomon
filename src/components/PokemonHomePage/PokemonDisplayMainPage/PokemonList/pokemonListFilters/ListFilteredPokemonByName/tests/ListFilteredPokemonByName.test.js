import { render, screen } from "@testing-library/react";
import { FilteredPokemonByName } from "../ListFilteredPokemonByName";

describe('ListFilteredPokemonByName', () => {
    it('should render the filtered pokemons on the screen', async () => {
        render(<FilteredPokemonByName />);

        expect(screen.getByTestId('filtered-pokemon')).toBeVisible();
    });
});