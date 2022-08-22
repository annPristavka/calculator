import styled from 'styled-components'

export const CalculatorDiv = styled.div`
width: 60%;
  display: grid;
  grid-template-rows: 1.5fr 8fr;
  padding: 0px 20px;
  &.active {
    width: 100%;
  }
`
export const HistoryDiv = styled.div`
  position: relative;
  border-left: 3px solid rgb(126, 122, 122);
  width: 40%;
  min-height: 500px;
  &.active {
    border-left: 0px;
    width: 0%;
    min-height: 530px;
  }
`
