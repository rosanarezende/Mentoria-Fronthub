import { Theme, Reset } from '@resultadosdigitais/tangram-components'
import { Connect } from '@resultadosdigitais/front-hub/react'

import ChatA from './ChatA'

export default Connect(() => (
  <Theme value={Theme.kinds.lina}>
    <Reset />
    <ChatA />
  </Theme>
))
