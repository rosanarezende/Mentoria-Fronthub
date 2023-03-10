import { Theme, Reset } from '@resultadosdigitais/tangram-components'
import { Connect } from '@resultadosdigitais/front-hub/react'

import ChatB from './ChatB'

export default Connect(() => (
  <Theme value={Theme.kinds.lina}>
    <Reset />
    <ChatB />
  </Theme>
))
