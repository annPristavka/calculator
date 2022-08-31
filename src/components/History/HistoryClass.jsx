import React from 'react'
import { Title, ImgClear } from './styled'
import close from '@/assets/close.png'

class HistoryClass extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title>History</Title>
        <ImgClear src={close} alt="close" />
      </React.Fragment>
    )
  }
}

export default HistoryClass
