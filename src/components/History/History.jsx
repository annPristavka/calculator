import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import close from '@/assets/close.png'
import { resetHistory } from '@/store/reducers/command'

import { Title, ImgClear, HistoryWrapper } from './styled'

const History = ({
  setExpress,
  setCurrentNumber,
  setResult,
}) => {
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
      <Title>History</Title>
      <ImgClear src={close} onClick={clearHistory} />
      <HistoryWrapper>
        {history.map((item, index) => (
          <p key={`${item}${index}`}>{item}</p>
        ))}
      </HistoryWrapper>
    </React.Fragment>
  )
}

History.propTypes = {
  setExpress: PropTypes.func,
  setCurrentNumber: PropTypes.func,
  setResult: PropTypes.func,
}

export default History
