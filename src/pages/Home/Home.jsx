import React , {useState}from 'react'
import Calculator from '@Components/Calculator/index'
import { CalcContainer } from './styled'
import PropTypes from 'prop-types'

 const  Home = ({value, historyShow, setHistoryShow}) => {

  return (
    <CalcContainer bg={value}>
      <Calculator historyShow={historyShow} setHistoryShow={setHistoryShow}/>
    </CalcContainer>
  )
}

Home.propTypes = {
  value: PropTypes.any,
  historyShow: PropTypes.bool,
  setHistoryShow: PropTypes.func,
}


export default Home
