import { render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Será avaliado se o arquivo teste NotFound.test.js contempla 100% dos casos de uso criados pelo Stryker', () => {
  it('É exibido na tela um h2 com o texto Page requested not found', () => {
    const { getByRole } = render(<NotFound />);
    expect(getByRole('heading', { level: 2, name: /Page requested not found/i })).toBeInTheDocument();
  });
  it('Existe uma imagem com o src https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    const { getByAltText } = render(<NotFound />);
    expect(getByAltText(/Pikachu crying because the page requested was not found/i)).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
