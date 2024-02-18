import { render, screen } from "@testing-library/react"
import { ChangePokemonButton } from "../ChangePokemonButton"
import { MemoryRouter } from 'react-router-dom';

describe('ChangePokemonButton', () => {
    it('should render correctly on the screen', async () => {
        render(
            <MemoryRouter>
                <ChangePokemonButton />
            </MemoryRouter>
        );

        expect(screen.getByTestId('change-poke-visualizer-button')).toBeVisible()
    })
})