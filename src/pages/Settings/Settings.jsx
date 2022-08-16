import React, { useContext, useState } from 'react'
import ThemeContext from '../../context'
import {
  SettingsDiv,
  Container,
  Select,
  Button,
  H3,
} from './styled'

const Settings = () => {
  const theme = useContext(ThemeContext)
  const [value, setValue] = useState(theme[0].value)
  console.log(value)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Container bg={value}>
      <SettingsDiv>
        <H3>Settings</H3>

        <Select value={value} onChange={handleChange}>
          {theme.map((item, index) => (
            <option key={item.id}>{item.value}</option>
          ))}
        </Select>
        <Button>Clear All History</Button>
      </SettingsDiv>
    </Container>
  )
}

export default Settings

//  background-color: ${({ theme }) => theme.spaces[4]}px;
