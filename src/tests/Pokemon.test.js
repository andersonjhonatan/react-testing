import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import pokemonList from '../data';
import renderWithRouter from '../renderWithRouter';

describe('Será avaliado se o arquivo teste Pokemon.test.js contempla 100% dos casos de uso criados pelo Stryker', () => {
  beforeEach(() => renderWithRouter(<App />));
  it('se o pokemon possui o nome correto', () => {
    userEvent.click(screen.getByRole('button', { name: /Dragon/i }));
    expect(screen.getByText(/Dragonair/i)).toBeInTheDocument();
  });

  it('A imagem do pokemon possui o src correto', () => {
    userEvent.click(screen.getByRole('button', { name: /Dragon/i }));
    expect(screen.getByRole('img', { name: /dragonair sprite/i })).toBeInTheDocument();
  });

  it('A imagem do pokemon possui o alt <name> sprite', () => {
    const { name, image } = pokemonList[0];
    expect(screen.getByAltText(`${name} sprite`)).toHaveAttribute('src', `${image}`);
  });

  it('É exibido na tela um texto com o tipo do pokemon', () => {
    const { type } = pokemonList[0];
    expect(screen.getByTestId('pokemon-type')).toHaveTextContent(`${type}`);
  });

  it('A imagem de favorito star possui o src /star-icon.svg', () => {
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    userEvent.click(screen.getByText(/pokémon favoritado?/i));
    expect(screen.getByRole('img', { name: /pikachu is marked as favorite/i })).toHaveAttribute('src', '/star-icon.svg');
  });

  it('É exibido na tela um texto com average e kg do pokémon', () => {
    const { averageWeight: { value, measurementUnit } } = pokemonList[0];
    expect(screen.getByText(/average weight/i)).toBeInTheDocument(`average weight: ${value} {${measurementUnit}}`);
  });
});
