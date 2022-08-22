import React from 'react'
import { H3, Img } from './styled'
import close from '@/assets/close.png'

class HistoryClass extends React.Component {
  render() {
    return (
      <React.Fragment>
        <H3>History</H3>
        <Img src={close} alt="close" />
      </React.Fragment>
    )
  }
}

export default HistoryClass
