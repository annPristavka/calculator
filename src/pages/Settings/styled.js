import styled from 'styled-components'

export const Container = styled.div `
  min-height: 520px;
  width: 100%;
  padding: 10px;
  background-color: ${(props) =>
    props.bg === 'Light Theme' ? 'white' : '#D3D3D3'};
`
export const SettingsDiv = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 150px;
  padding-left: 30px;
`

export const Select = styled.select `
  width: 150px;
  height: 32px;
`

export const Button = styled.button `
  width: 150px;
  height: 32px;
  color: black;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid grey;
  cursor: pointer;
  font-family: 'Pathway Gothic One', sans-serif;
`

export const H3 = styled.h3 `
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 24px;
`