import { render, screen } from "@testing-library/react"
import { PokemonStats } from "../PokemonStats";

describe('PokemonStats', () => {
    it('should render the pokemon stats list on the screen', async () => {
        const PokemonInfo = {
            stats: [
                { stat: { name: 'hp' }, base_stat: 100 },
                { stat: { name: 'attack' }, base_stat: 80 },
            ]
        };

        render(<PokemonStats pokemonInfo={PokemonInfo} />);

        expect(screen.getByTestId('pokemon-stats')).toBeVisible();
    });
});