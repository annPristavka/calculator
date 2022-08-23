import React from 'react'
import { Button } from './styled'
import PropTypes from 'prop-types'

const ControlPanel = ({setHistoryShow}) => {

  const handleHistory = () => {
    setHistoryShow(prev => !prev)
  }
  return (
    <React.Fragment>
      <Button className="control" onClick={handleHistory}>></Button>
    </React.Fragment>
  )
}

ControlPanel.propTypes = {
  setHistoryShow: PropTypes.func,
}


export default ControlPanel
