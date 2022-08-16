import React from 'react'
import { button } from '../../constants/buttons'

import { Key, Button, ButtonEq } from './styled'

const KeyPad = () => {
  const getSimbol = (e) => {
    console.log(e.target.innerHTML)
  }
  
  return (
    <Key onClick={getSimbol}>
      {button.map((item, index) =>
        item.id === 15 ? (
          <ButtonEq key={item.id}>{item.value}</ButtonEq>
        ) : (
          <Button key={item.id}>{item.value}</Button>
        ),
      )}
    </Key>
  )
}

export default KeyPad
