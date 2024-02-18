import { render, screen } from "@testing-library/react"
import { RenderPokemonMoveTable } from "../PokemonMovesTable";

describe('PokemonMovesTable', () => {
    it('should render the moves table on the screen', async () => {
        render(<RenderPokemonMoveTable />);

        expect(screen.getByTestId('pokemon-moves-table')).toBeVisible();
    });
});