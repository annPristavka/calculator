import React from 'react'
import { button } from '@/constants/buttons'

import { Key, Button, ButtonEq } from './styled'

const KeyPad = ({ getSimbol }) => {
  return (
    <Key>
      {button.map((item, index) =>
        item.id === 15 ? (
          <ButtonEq key={item.id} onClick={getSimbol}>
            {item.value}
          </ButtonEq>
        ) : (
          <Button key={item.id} onClick={getSimbol}>
            {item.value}
          </Button>
        ),
      )}
    </Key>
  )
}

export default KeyPad
