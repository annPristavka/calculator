import React from 'react'
import PropTypes from 'prop-types'
import { Input, P } from './styled'

const Display = ({ value, express }) => {

  return (
    <>
      <Input>
        <P>{express}</P>
        <P>{value}</P>
      </Input>
    </>
  )
}

Display.propTypes = {
  value: PropTypes.any,
  express: PropTypes.any,
}

export default Display
