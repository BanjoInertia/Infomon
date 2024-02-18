import { render, screen } from "@testing-library/react"
import { PokemonDetailsImage } from "../PokemonDetailsImage"

describe('PokemonDetailsImage', () => {
    it('should render the pokemon image on the screen', async () => {
        const pokemonInfo = { id: 25, name: "Pikachu" };
        render(<PokemonDetailsImage pokemonInfo={pokemonInfo} />);

        expect(screen.getByTestId('pokemon-details-image')).toBeVisible();
    });
});