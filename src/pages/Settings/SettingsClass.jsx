import React from 'react'
import {
  SettingsDiv,
  Container,
  Select,
  Button,
  H3,
} from './styled'

const theme = [
  { id: 1, color: '#fff', value: 'Light Theme' },
  { id: 2, color: '#000', value: 'Dark Theme' },
]

class SettingsClass extends React.Component {
  render() {
    return (
      <Container>
        <SettingsDiv>
          <H3>Settings</H3>

          <Select>
            {theme.map((item, index) => (
              <option key={item.id}>{item.value}</option>
            ))}
          </Select>
          <Button>Clear All History</Button>
        </SettingsDiv>
      </Container>
    )
  }
}

export default SettingsClass
