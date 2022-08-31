import React from 'react'
import PropTypes from 'prop-types'

import { ButtonClear } from './styled'

const ControlPanel = ({ setHistoryShow }) => {
  const handleHistory = () => {
    setHistoryShow((prev) => !prev)
  }

  return (
    <ButtonClear onClick={handleHistory}>></ButtonClear>
  )
}

ControlPanel.propTypes = {
  setHistoryShow: PropTypes.func,
}

export default ControlPanel
