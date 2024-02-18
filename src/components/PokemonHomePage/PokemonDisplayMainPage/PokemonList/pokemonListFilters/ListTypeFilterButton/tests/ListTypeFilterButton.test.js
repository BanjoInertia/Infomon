import { render, screen } from "@testing-library/react";
import { TypeFilterButton } from "../ListTypeFilterButton";

describe('ListTypeFilterButton', () => {
    it('should render the filter button on the screen', async () => {
        render(<TypeFilterButton />);

        expect(screen.getByTestId('type-filter-button')).toBeVisible();
    });
});