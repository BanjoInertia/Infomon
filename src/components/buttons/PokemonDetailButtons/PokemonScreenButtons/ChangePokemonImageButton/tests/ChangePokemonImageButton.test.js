import { render, screen } from "@testing-library/react"
import { ChangePokemonImageButton } from "../ChangePokemonImageButton"

describe('ChangePokemonImageButton', () => {
    it('should render the button on the screen', async () => {
        render(<ChangePokemonImageButton />)

        expect(screen.getByTestId('change-poke-image-button')).toBeVisible()
    })
})