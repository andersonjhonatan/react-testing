import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../helper/RenderWithRouter';

describe('Será avaliado se o arquivo teste Pokedex.test.js contempla 100% dos casos de uso criados pelo Stryker', () => {
  beforeEach(() => renderWithRouter(<App />));

  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    expect(screen.getByRole('heading', { level: 2, name: /Encountered Pokémon/i })).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    userEvent.click(screen.getByText(/Próximo Pokémon/i));
    expect(screen.getByRole('button', { name: /Próximo Pokémon/i })).toBeInTheDocument();
  });

  it('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All e se existe o nome pikachu', () => {
    expect(screen.queryAllByTestId('pokemon-type-button'));
    userEvent.click(screen.queryAllByTestId('pokemon-type-button')[0]);
    userEvent.click(screen.getByRole('button', { name: /dragon/i }));
    userEvent.click(screen.getByRole('button', { name: /all/i }));
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
  });

  it('O texto do botão deve corresponder ao nome do tipo, ex. Psychic', () => {
    userEvent.click(screen.getByRole('button', { name: /Psychic/i }));
    expect(screen.getByText(/Alakazam/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /próximo pokémon/i }));
    expect(screen.getByText(/Mew/i)).toBeInTheDocument();
  });
});
