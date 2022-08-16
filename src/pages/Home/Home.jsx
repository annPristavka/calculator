import React from 'react'

// import Calculator from '@/components/Calculator'
import Calculator from '@Components/Calculator/index'
import { CalcContainer } from './styled'

export default ({value}) => {
  return (
    <CalcContainer bg={value}>
      <Calculator />
    </CalcContainer>
  )
}
