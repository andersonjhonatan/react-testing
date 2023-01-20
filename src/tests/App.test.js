import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação:', () => {
  it('Os links deve possuir o texto Home', () => {
    const { history } = renderWithRouter(<App />);
    const linksHome = screen.getByRole('link', { name: /home/i });
    expect(linksHome).toBeInTheDocument();
    userEvent.click(linksHome);
    expect(history.location.pathname).toBe('/');
  });
  it('O link deve possuir o texto About', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /About/i });
    expect(linkAbout);
    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');
  });
  it('O link deve possuir o texto favorite pokémon', () => {
    const { history } = renderWithRouter(<App />);
    const linkPokedex = screen.getByRole('link', { name: /favorite pokémon/i });
    userEvent.click(linkPokedex);
    expect(history.location.pathname).toBe('/favorites');
    expect(linkPokedex).toBeInTheDocument();
  });
  it('testar um caminho não exiwstente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('Not/Found');
    });
    const notFoundTitle = screen.getByRole(
      'heading',
      { name: /Not Found/i },
    );
    expect(notFoundTitle).toBeInTheDocument();
  });
});
