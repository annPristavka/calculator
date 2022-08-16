import React from 'react'
import { H3, Img } from './styled'
import close from '@/assets/close.png'

class HistoryClass extends React.Component {
  render() {
    return (
      <>
        <H3>History</H3>
        <Img src={close} alt="close" />
      </>
    )
  }
}

export default HistoryClass
