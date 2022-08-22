import React from 'react'
import { H3, Img, HistoryDiv } from './styled'
import close from '@/assets/close.png'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { resetHistory } from '@/reducers/command'

const History = ({setExpress, setCurrentNumber, setResult}) => {
  const dispatch = useDispatch()
  const history = useSelector(
    (store) => store.history.history,
  )

  const clearHistory = () => {
    dispatch(resetHistory())
    setExpress('')
    setCurrentNumber(0)
    setResult(0)
  }

  return (
    <React.Fragment>
      <H3>History</H3>
      <Img src={close} onClick={clearHistory} />
      <HistoryDiv>
        {history.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </HistoryDiv>
    </React.Fragment>
  )
}

History.propTypes = {
  setExpress:PropTypes.func,
  setCurrentNumber:PropTypes.func,
  setResult:PropTypes.func,
}


export default History
