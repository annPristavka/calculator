import styled from 'styled-components'

export const Container = styled.div`
  min-height: 520px;
  width: 50%;
  padding: 10px;
  background-color: ${(value) =>
    value === 'Light Theme' ? 'red' : 'blue'};
`
export const SettingsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 150px;
  padding-left: 30px;
`

export const Select = styled.select`
  width: 150px;
  height: 32px;
`

export const Button = styled.button`
  width: 150px;
  height: 32px;
  color: black;
  font-size: 14px;
  background-color: rgba(230, 230, 230, 1);
  border-radius: 5px;
  border: 1px solid grey;
  cursor: pointer;
  font-family: 'Pathway Gothic One', sans-serif;
`

export const H3 = styled.h3`
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 24px;
`
