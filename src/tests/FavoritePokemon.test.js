import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Favorite from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';

describe('Ao favoritar a partir da página de detalhes', () => {
  test('Teste se é exibida na tela a mensagem `No favorite pokemon found`, caso a pessoa não tenha Pokémon favoritos', () => {
    const { getByText } = render(<Favorite />);
    expect(getByText('No favorite Pokémon found')).toBeInTheDocument();
  });

  test('Teste se apenas são exibidos os Pokémon favoritados', () => {
    const { getByText } = renderWithRouter(<App />);
    userEvent.click(getByText(/more details/i));
    userEvent.click(getByText(/pokémon favoritado?/i));
    userEvent.click(getByText(/Favorite Pokémon/i));
    expect(getByText(/pikachu/i)).toBeInTheDocument();
  });
});
