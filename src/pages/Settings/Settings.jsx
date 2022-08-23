import React, { useContext, useState } from 'react'
import {
  SettingsDiv,
  Container,
  Select,
  Button,
  H3,
} from './styled'
import PropTypes from 'prop-types'
import { theme } from '@/constants/themes'

const Settings = ({ setValue, value }) => {
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

Settings.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
}


export default Settings

//  background-color: ${({ theme }) => theme.spaces[4]}px;
