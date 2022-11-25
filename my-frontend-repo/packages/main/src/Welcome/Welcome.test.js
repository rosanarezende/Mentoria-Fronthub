import {
  instanceMock,
  renderWithTranslation,
} from '@resultadosdigitais/front-hub/react/jest'
import { screen, act } from '@testing-library/react'

import Welcome from './Welcome'
import translation from './locales/pt-BR.json'

describe('Welcome', () => {
  it('should render title', async () => {
    await act(
      async () =>
        await renderWithTranslation(instanceMock(<Welcome />), translation),
    )

    expect(screen.getByText(translation.Welcome.Title)).toBeInTheDocument()
  })
})
