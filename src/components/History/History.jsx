import React from 'react'
import { H3, Img, HistoryDiv } from './styled'
import close from '@/assets/close.png'
import { useSelector, useDispatch } from 'react-redux'
import { resetHistory } from '@/reducers/command'

const History = () => {
  const dispatch = useDispatch()
  const history = useSelector(
    (store) => store.history.history,
  )

  const clearHistory = () => {
    dispatch(resetHistory())
  }

  console.log(history)
  return (
    <>
      <H3>History</H3>
      <Img src={close} onClick={clearHistory} />
      <HistoryDiv>
        {history.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </HistoryDiv>
    </>
  )
}

export default History
