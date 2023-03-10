import {
  instanceMock,
  renderWithTranslation,
} from '@resultadosdigitais/front-hub/react/jest'
import { screen, act } from '@testing-library/react'

import ChatA from './ChatA'
import translation from './locales/pt-BR.json'

describe('ChatA', () => {
  it.skip('should render title', async () => {
    await act(
      async () =>
        await renderWithTranslation(instanceMock(<ChatA />), translation),
    )

    expect(screen.getByText(translation.ChatA.Title)).toBeInTheDocument()
  })
})
