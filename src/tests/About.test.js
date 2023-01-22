import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('Teste se a página contém as informações sobre a Pokédex', () => {
  beforeEach(() => render(<About />));
  it('É exibido na tela um h2 com texto About Pokédex', () => {
    expect(screen.getByRole('heading', { level: 2, name: 'About Pokédex' })).toBeInTheDocument();
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    expect(screen.getByAltText(/Pokédex/i)).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
