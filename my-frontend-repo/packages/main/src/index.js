import { Theme, Reset } from '@resultadosdigitais/tangram-components'
import { Connect } from '@resultadosdigitais/front-hub/react'

import Welcome from './Welcome'

export default Connect(() => (
  <Theme value={Theme.kinds.lina}>
    <Reset />
    <Welcome />
  </Theme>
))
