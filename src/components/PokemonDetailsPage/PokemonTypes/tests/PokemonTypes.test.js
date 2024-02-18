import { render, screen } from "@testing-library/react"
import { PokemonTypes } from "../PokemonTypes";

describe('PokemonTypes', () => {
    it('should render the pokemon types on the screen', async () => {
        const PokemonInfo = {
            types: [
                { type: { name: 'grass' }},
                { type: { name: 'water' }},
            ]
        };

        render(<PokemonTypes pokemonInfo={PokemonInfo} />);

        expect(screen.getByTestId('pokemon-types')).toBeVisible();
    });
});