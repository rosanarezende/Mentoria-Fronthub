import {
  instanceMock,
  renderWithTranslation,
} from '@resultadosdigitais/front-hub/react/jest'
import { screen, act } from '@testing-library/react'

import ChatB from './ChatB'
import translation from './locales/pt-BR.json'

describe('ChatB', () => {
  it.skip('should render title', async () => {
    await act(
      async () =>
        await renderWithTranslation(instanceMock(<ChatB />), translation),
    )

    expect(screen.getByText(translation.ChatB.Title)).toBeInTheDocument()
  })
})
