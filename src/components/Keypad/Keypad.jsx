import React from 'react'
import { button } from '../../constants/buttons'

import { Key, Button, ButtonEq } from './styled'

const KeyPad = () => {
  return (
    <Key>
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
