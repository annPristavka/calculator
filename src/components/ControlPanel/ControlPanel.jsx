import React from 'react'
import { Button } from './styled'

const ControlPanel = ({setHistoryShow}) => {

  const handleHistory = () => {
    setHistoryShow(prev => !prev)
  }
  return (
    <>
      <Button className="control" onClick={handleHistory}>></Button>
    </>
  )
}

export default ControlPanel
