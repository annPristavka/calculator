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
    const { setValue, value } = this.props

    const handleChange = (e) => {
      setValue(e.target.value)
    }

    return (
      <Container bg={value}>
        <SettingsDiv>
          <H3> Settings </H3>
          <Select value={value} onChange={handleChange}>
            {theme.map((item, index) => (
              <option key={item.id}> {item.value} </option>
            ))}
          </Select>
          <Button> Clear All History </Button>
        </SettingsDiv>
      </Container>
    )
  }
}

export default SettingsClass
