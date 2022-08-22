import React from 'react'
import { Button } from './styled'

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

export default ControlPanel
