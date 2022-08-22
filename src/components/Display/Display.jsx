import React from 'react'
import PropTypes from 'prop-types'
import { Input, P } from './styled'

const Display = ({ value, express }) => {

  return (
    <React.Fragment>
      <Input>
        <P>{express}</P>
        <P>{value}</P>
      </Input>
    </React.Fragment>
  )
}

Display.propTypes = {
  value: PropTypes.any,
  express: PropTypes.any,
}

export default Display
