import { render, screen } from "@testing-library/react";
import { PokemonSetter } from "../PokemonSetter";

describe('PokemonListItem', () => {
    it('should render the pokemon list on the screen', async () => {   
        render(<PokemonSetter />);

        expect(screen.getByTestId('pokemon-setter')).toBeVisible();
    });
});