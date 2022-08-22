import styled from 'styled-components'

export const CalcContainer = styled.div `
  display: grid;
  grid-template-columns: 4fr 2fr;
  width: 100%;
  min-height: 500px;
  background-color: ${(props) => props.bg === 'Light Theme'
    ? ({ theme }) => theme.colors.white
    : ({ theme }) => theme.colors.secondaryLight};
  padding: 10px;
`