import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import pokemonList from '../data';
import renderWithRouter from '../renderWithRouter';

describe('Será avaliado se o arquivo teste contempla 100% dos casos de uso criados pelo Stryker', () => {
  beforeEach(() => renderWithRouter(<App />));

  it('É exibido na tela um h2 com o texto <name> Details', () => {
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    const { name } = pokemonList[0];
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: `Game Locations of ${name}`,
      }),
    );
  });

  it('É exibido na tela um h2 com o texto Summary', () => {
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    expect(
      screen.getByRole('heading', { level: 2, name: /summary/i }),
    ).toBeInTheDocument();
  });

  it('É exibido na tela um texto contendo <summary>', () => {
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    const { summary } = pokemonList[0];
    expect(screen.getByText(`${summary}`)).toBeInTheDocument();
  });

  it('É exibido na tela um h2 com o texto Game Locations of <name>', () => {
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    const { name } = pokemonList[0];
    expect(
      screen.getByRole('heading', { level: 2, name: `${name} Details` }),
    ).toBeInTheDocument();
  });

  it('São exibidas na tela imagens de localização com o src correto', () => {
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    const { name } = pokemonList[0];
    const { foundAt } = pokemonList[0];
    expect(screen.getAllByAltText(`${name} location`)).toHaveLength(2);
    const elements = screen.getAllByAltText(`${name} location`);
    const mapUrls = foundAt.filter((item) => item.map[0]).map((item) => item.map);
    elements.forEach((element, index) => {
      expect(element).toHaveAttribute('src', mapUrls[index]);
    });
  });

  it('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    expect(screen.getByLabelText(/pokémon favoritado?/i)).toBeInTheDocument();
    userEvent.click(screen.getByDisplayValue(/on/i));
    expect(
      screen.getByRole('img', { name: /pikachu is marked as favorite/i }),
    ).toBeInTheDocument();
  });
});
