import { render, screen } from "@testing-library/react";
import { PokemonDisplayHeader } from "../PokemonDisplayHeader";

describe('PokemonDisplayHeader', () => {
    it('should render the header on the screen', async () => {
        render(<PokemonDisplayHeader />);

        expect(screen.getByTestId('pokemon-header')).toBeVisible();
    });
});