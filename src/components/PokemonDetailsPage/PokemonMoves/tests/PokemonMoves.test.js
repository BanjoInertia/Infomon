import { render, screen } from "@testing-library/react"
import { PokemonMoves } from "../PokemonMoves";

describe('PokemonMoves', () => {
    it('should render the moves list on the screen', async () => {

        const PokemonInfo = {
            moves: [
                {
                    move: {
                        name: 'move1',
                        url: 'https://pokeapi.co/api/v2/move/1/'
                    },
                    version_group_details: [
                        {
                            move_learn_method: {
                                name: 'level-up'
                            },
                            version_group: {
                                name: 'Generation'
                            }
                        }
                    ]
                },
            ]
        };
        
        const SelectedGeneration = 'Generation';

        render(<PokemonMoves pokemonInfo={PokemonInfo} selectedGeneration={SelectedGeneration} />);

        expect(screen.getByTestId('pokemon-moves')).toBeVisible();
    });
});