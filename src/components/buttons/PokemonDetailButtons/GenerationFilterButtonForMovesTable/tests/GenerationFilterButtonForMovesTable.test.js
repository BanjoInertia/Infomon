import { render, screen } from "@testing-library/react"
import { GenerationFilterButtonForMovesTable } from "../GenerationFilterButtonForMovesTable"

describe('GenerationFilterButtonForMovesTable', () => {
    it('should render correctly on the screen', async () => {
        render(<GenerationFilterButtonForMovesTable />);

        expect(screen.getByTestId('generation-button')).toBeVisible()
    })
})