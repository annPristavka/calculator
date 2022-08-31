import React from 'react'
import {
  WrapperContent,
  Container,
  ChoiseTheme,
  Button,
  Title,
} from './styled'
import { theme } from '@/constants/index'

class SettingsClass extends React.Component {
  render() {
    const { setValue, value } = this.props

    const handleChange = (e) => {
      setValue(e.target.value)
    }

    return (
      <Container backgroundTheme={value}>
        <WrapperContent>
          <Title> Settings </Title>
          <ChoiseTheme
            value={value}
            onChange={handleChange}>
            {theme.map(({ id, value }) => (
              <option key={id}>{value}</option>
            ))}
          </ChoiseTheme>
          <Button> Clear All History </Button>
        </WrapperContent>
      </Container>
    )
  }
}

export default SettingsClass
