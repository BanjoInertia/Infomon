import { render, screen } from "@testing-library/react";
import { PokemonDisplayFooter } from "../PokemonDisplayFooter";

describe('PokemonDisplayFooter', () => {
    it('should render the footer on the screen', async () => {
        render(<PokemonDisplayFooter />);

        expect(screen.getByTestId('pokemon-footer')).toBeVisible();
    });
});