import React from 'react'
import { Input, P } from './styled'

const Display = ({ value, sign, express }) => {
  return (
    <>
      <Input>
        <P>{express}</P>
        <P>{value}</P>
      </Input>
    </>
  )
}

export default Display
