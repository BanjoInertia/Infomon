import { render, screen } from "@testing-library/react"
import { PokemonAbilities } from "../PokemonAbilities"

describe('PokemonAbilities', () => {
    it('should render the abilities list on the screen', async () => {
        render(<PokemonAbilities />)

        expect(screen.getByTestId('pokemon-abilities')).toBeVisible()
    })
})