import { render } from '@testing-library/react';
import About from '../pages/About';

describe('Teste se a página contém as informações sobre a Pokédex', () => {
  it('É exibido na tela um h2 com texto About Pokédex', () => {
    const { getByRole } = render(<About />);
    expect(getByRole('heading', { name: 'About Pokédex' })).toBeInTheDocument();
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    const { getByAltText } = render(<About />);
    expect(getByAltText(/Pokédex/i)).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
