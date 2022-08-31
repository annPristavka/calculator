import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Text } from './styled'

const Display = ({ value, express }) => {
  return (
    <Wrapper>
      <Text>{express}</Text>
      <Text>{value}</Text>
    </Wrapper>
  )
}

Display.propTypes = {
  value: PropTypes.any,
  express: PropTypes.any,
}

export default Display
