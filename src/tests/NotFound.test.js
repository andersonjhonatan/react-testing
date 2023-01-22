import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Será avaliado se o arquivo teste NotFound.test.js contempla 100% dos casos de uso criados pelo Stryker', () => {
  beforeEach(() => render(<NotFound />));
  it('É exibido na tela um h2 com o texto Page requested not found', () => {
    expect(screen.getByRole('heading', { level: 2, name: /Page requested not found/i })).toBeInTheDocument();
  });

  it('Existe uma imagem com o src https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    expect(screen.getByAltText(/Pikachu crying because the page requested was not found/i)).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
